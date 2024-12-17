import { rgbaToHex } from '../utils/color-converter-helper';
import {
  DesignTokensResponse,
  ModeValue,
  ResolvedType,
  Variable,
  Variables,
} from '../types/design-tokens';
import {
  TokenTheme,
  Brand,
  BrandId,
  Variant,
  VariantId,
  ThemeVariantsId,
  ThemeTypography,
  ValueId,
} from '../types/themes';

const COMP_COLLECTION_ID = 'VariableCollectionId:1:2890';
const REF_COLLECTION_ID = 'VariableCollectionId:1:2865';
const SYS_COLLECTION_ID = 'VariableCollectionId:1:2905';

const processName = (name: string) => {
  return name.replace(/\//gi, '-');
};

const processModeColor = (variable: Variable, modeId: string): string => {
  return rgbaToHex(
    (variable.valuesByMode[modeId] as ModeValue).r as number,
    (variable.valuesByMode[modeId] as ModeValue).g as number,
    (variable.valuesByMode[modeId] as ModeValue).b as number,
    (variable.valuesByMode[modeId] as ModeValue).a as number
  );
};

const processCommonFloats = (
  variableName: string,
  mode: number,
  key: VariantId,
  variants: ThemeVariantsId
): ThemeVariantsId => {
  const newVariants = { ...variants };
  const value = { [variableName]: `${mode}px` };
  Object.keys(BrandId).forEach((platformKey) => {
    const newKey = platformKey as keyof typeof BrandId;
    newVariants[key][BrandId[newKey]].floats = {
      ...newVariants[key][BrandId[newKey]].floats,
      ...value,
    };
  });
  return { ...newVariants };
};

const processModesWithoutKey = (
  item: string,
  variableName: string,
  variants: ThemeVariantsId,
  variables: Variables
): ThemeVariantsId => {
  const newVariants = { ...variants };
  const darkColorNameValue = processModeColor(variables[item], VariantId.DARK);
  const lightColorNameValue = processModeColor(variables[item], VariantId.LIGHT);
  Object.keys(BrandId).forEach((platformName) => {
    const newKey = platformName as keyof typeof BrandId;
    newVariants[VariantId.DARK][BrandId[newKey]].colors = {
      ...newVariants[VariantId.DARK][BrandId[newKey]].colors,
      [variableName]: darkColorNameValue,
    };
    newVariants[VariantId.LIGHT][BrandId[newKey]].colors = {
      ...newVariants[VariantId.LIGHT][BrandId[newKey]].colors,
      [variableName]: lightColorNameValue,
    };
  });
  return { ...newVariants };
};

const processColors = (
  key: VariantId,
  variableName: string,
  variableKeyName: string,
  variants: ThemeVariantsId,
  variables: Variables
): ThemeVariantsId => {
  const newVariants = { ...variants };
  Object.keys(variables[variableKeyName].valuesByMode).forEach((platformId) => {
    const newBrandId = platformId as BrandId;
    const variableId = (variables[variableKeyName].valuesByMode[platformId] as ModeValue)
      .id as string;
    if (!variableId) {
      return;
    }
    if (Object.values(VariantId).includes(platformId as VariantId)) {
      Object.keys(variables[variableId].valuesByMode).forEach((platformKey) => {
        const platformVariableId = (variables[variableId].valuesByMode[platformKey] as ModeValue)
          .id as string;
        const absoluteColorNameValue = processModeColor(
          variables[platformVariableId],
          ValueId.VALUE
        );
        newVariants[platformId as VariantId][platformKey as BrandId].colors = {
          ...newVariants[platformId as VariantId][platformKey as BrandId].colors,
          [variableName]: absoluteColorNameValue,
        };
      });
      return;
    }
    const colorNameValue = processModeColor(variables[variableId], ValueId.VALUE);

    newVariants[key][newBrandId].colors = {
      ...newVariants[key][newBrandId].colors,
      [variableName]: colorNameValue,
    };
  });
  return { ...newVariants };
};

const processSimpleFloats = (
  variableName: string,
  key: VariantId,
  variableKeyName: string,
  variants: ThemeVariantsId,
  variables: Variables
) => {
  const newVariants = { ...variants };
  Object.values(BrandId).forEach((platformId) => {
    newVariants[key][platformId].floats = {
      ...variants[key][platformId].floats,
      [variableName]: `${variables[variableKeyName].valuesByMode[ValueId.VALUE]}px`,
    };
  });
  return { ...newVariants };
};

const processFloats = (
  variableName: string,
  key: VariantId,
  variableKeyName: string,
  variants: ThemeVariantsId,
  variables: Variables
) => {
  const newVariants = { ...variants };
  Object.keys(variables[variableKeyName].valuesByMode).forEach((platformId) => {
    const newBrandId = platformId as BrandId;
    const variableId = (variables[variableKeyName].valuesByMode[platformId] as ModeValue)
      .id as string;
    if (variableId) {
      newVariants[key][newBrandId].floats = {
        ...newVariants[key][newBrandId].floats,
        [variableName]: `${variables[variableId].valuesByMode[ValueId.VALUE]}px`,
      };
    }
  });
  return { ...newVariants };
};

const processFloatKeyName = (key: string, num: string | number | ModeValue) => {
  let name = key;
  let value = num.toString();
  switch (key) {
    case 'size':
      name = 'font-size';
      value = `${num}px`;
      break;
    default:
  }
  return { name, value };
};

const processStringKeyName = (
  key: string,
  mode: ModeValue,
  variables: Variables,
  fontFamily?: string
) => {
  const variableKeyName = mode.id;
  if (!variableKeyName || !variables[variableKeyName].valuesByMode[ValueId.VALUE]) {
    return;
  }
  let name = key;
  let value = variables[variableKeyName].valuesByMode[ValueId.VALUE] as string;
  switch (key) {
    case 'font':
      name = 'font-family';
      value = `${value.replace(/\s/g, '')}${fontFamily ?? ''}`;
      break;
    case 'weight':
      name = 'font-family';
      value = `${fontFamily ?? ''}-${value}`;
      break;
    case 'case':
      name = 'text-transform';
      break;
  }
  return { name, value };
};

export const getTokens = (designTokens: DesignTokensResponse) => {
  const variableCollection = designTokens.meta.variableCollections;
  const variables = designTokens.meta.variables;
  const platformInitialValues = {
    colors: {} as { [key: string]: string },
    floats: {} as { [key: string]: string },
    typography: {} as ThemeTypography,
  };
  let variants: ThemeVariantsId = {
    [VariantId.LIGHT]: {
      [BrandId.MAIN]: {} as TokenTheme,
      [BrandId.SIDE]: {} as TokenTheme,
    },
    [VariantId.DARK]: {
      [BrandId.MAIN]: {} as TokenTheme,
      [BrandId.SIDE]: {} as TokenTheme,
    },
  };
  Object.keys(BrandId).forEach((key) => {
    const newKey = key as keyof typeof BrandId;
    variants[VariantId.LIGHT][BrandId[newKey]] = {
      ...platformInitialValues,
    };
    variants[VariantId.DARK][BrandId[newKey]] = {
      ...platformInitialValues,
    };
  });
  // Process component values
  const compCollection = { ...variableCollection[COMP_COLLECTION_ID] };
  compCollection.variableIds.forEach((item) => {
    (Object.keys(variables[item].valuesByMode) as VariantId[]).forEach((key) => {
      const variableName = processName(variables[item].name);
      const mode = variables[item].valuesByMode[key];
      if (typeof mode === 'number') {
        variants = { ...processCommonFloats(variableName, mode, key, variants) };
        return;
      }
      const variableKeyName = (mode as ModeValue).id;
      if (variables[item].resolvedType === ResolvedType.COLOR && !variableKeyName) {
        variants = { ...processModesWithoutKey(item, variableName, variants, variables) };
        return;
      }
      if (!variableKeyName || !variables[variableKeyName]) {
        throw new Error(`Variable ${variableKeyName} is not defined!`);
      }
      if (
        variableKeyName &&
        variables[variableKeyName].resolvedType === ResolvedType.COLOR &&
        typeof variables[variableKeyName].valuesByMode === 'object'
      ) {
        variants = {
          ...processColors(key, variableName, variableKeyName, variants, variables),
        };
        return;
      }
      if (
        variableKeyName &&
        variables[item].resolvedType === ResolvedType.FLOAT &&
        variables[variableKeyName].valuesByMode[ValueId.VALUE]
      ) {
        variants = {
          ...processSimpleFloats(variableName, key, variableKeyName, variants, variables),
        };
        return;
      }
      if (
        variableKeyName &&
        variables[variableKeyName].resolvedType === ResolvedType.FLOAT &&
        typeof variables[variableKeyName].valuesByMode === 'object'
      ) {
        variants = {
          ...processFloats(variableName, key, variableKeyName, variants, variables),
        };
        return;
      }
    });
  });

  // Process system values
  const sysCollection = { ...variableCollection[SYS_COLLECTION_ID] };
  sysCollection.variableIds.forEach((item) => {
    // Process typography
    if (variables[item].name.split('/')[0] === 'typescale') {
      const nameParts = variables[item].name.split('/');
      const variableName = `${nameParts[1]}-${nameParts[2]}`;
      (Object.keys(variables[item].valuesByMode) as BrandId[]).forEach((platformId) => {
        if (variables[item].resolvedType === ResolvedType.FLOAT) {
          const id = (variables[item].valuesByMode[platformId] as ModeValue).id;
          if (!id) {
            return;
          }
          const fontData = processFloatKeyName(
            nameParts[3],
            variables[id].valuesByMode[ValueId.VALUE]
          );
          variants[VariantId.LIGHT][platformId].typography = {
            ...variants[VariantId.LIGHT][platformId].typography,
            [variableName]: {
              ...variants[VariantId.LIGHT][platformId].typography[variableName],
              [fontData.name]: fontData.value,
            },
          };
          variants[VariantId.DARK][platformId].typography = {
            ...variants[VariantId.DARK][platformId].typography,
            [variableName]: {
              ...variants[VariantId.DARK][platformId].typography[variableName],
              [fontData.name]: fontData.value,
            },
          };
          return;
        }
        if (variables[item].resolvedType === ResolvedType.STRING) {
          const fontData = processStringKeyName(
            nameParts[3],
            variables[item].valuesByMode[platformId] as ModeValue,
            variables,
            variants[VariantId.LIGHT][platformId].typography[variableName]?.['font-family']
          );
          if (!fontData) {
            return;
          }
          variants[VariantId.LIGHT][platformId].typography = {
            ...variants[VariantId.LIGHT][platformId].typography,
            [variableName]: {
              ...variants[VariantId.LIGHT][platformId].typography[variableName],
              [fontData.name]: fontData.value,
            },
          };
          variants[VariantId.DARK][platformId].typography = {
            ...variants[VariantId.DARK][platformId].typography,
            [variableName]: {
              ...variants[VariantId.DARK][platformId].typography[variableName],
              [fontData.name]: fontData.value,
            },
          };
        }
      });
      return;
    }
    if (variables[item].resolvedType === ResolvedType.COLOR) {
      (Object.keys(variables[item].valuesByMode) as BrandId[]).forEach((platformId) => {
        const variableName = processName(variables[item].name);
        const mode = variables[item].valuesByMode[platformId] as ModeValue;
        const variableKeyName = mode.id;
        if (!variableKeyName || !variables[variableKeyName].valuesByMode[ValueId.VALUE]) {
          return;
        }
        const colorNameValue = processModeColor(variables[variableKeyName], ValueId.VALUE);
        variants[VariantId.LIGHT][platformId].colors = {
          ...variants[VariantId.LIGHT][platformId].colors,
          [variableName]: colorNameValue,
        };
        variants[VariantId.DARK][platformId].colors = {
          ...variants[VariantId.DARK][platformId].colors,
          [variableName]: colorNameValue,
        };
      });
      return;
    }
    if (variables[item].resolvedType === ResolvedType.FLOAT) {
      (Object.keys(variables[item].valuesByMode) as BrandId[]).forEach((platformId) => {
        const variableName = processName(variables[item].name);
        const mode = variables[item].valuesByMode[platformId] as ModeValue;
        const variableKeyName = mode.id;
        if (!variableKeyName) {
          return;
        }
        const floatValue = variables[variableKeyName].valuesByMode[ValueId.VALUE] as number;
        variants[VariantId.LIGHT][platformId].floats = {
          ...variants[VariantId.LIGHT][platformId].floats,
          [variableName]: `${floatValue}px`,
        };
        variants[VariantId.DARK][platformId].floats = {
          ...variants[VariantId.DARK][platformId].floats,
          [variableName]: `${floatValue}px`,
        };
      });
      return;
    }
  });

  // Process ref values
  const refCollection = { ...variableCollection[REF_COLLECTION_ID] };
  refCollection.variableIds.forEach((item) => {
    const variableName = processName(variables[item].name);
    if (variables[item].resolvedType === ResolvedType.FLOAT) {
      (Object.keys(variants) as VariantId[]).forEach((key) => {
        variants = {
          ...processSimpleFloats(variableName, key, variables[item].id, variants, variables),
        };
      });
      return;
    }
    if (variables[item].resolvedType === ResolvedType.COLOR) {
      const colorNameValue = processModeColor(variables[item], ValueId.VALUE);
      (Object.keys(variants[VariantId.LIGHT]) as BrandId[]).forEach((platformId) => {
        variants[VariantId.LIGHT][platformId].colors = {
          ...variants[VariantId.LIGHT][platformId].colors,
          [variableName]: colorNameValue,
        };
        variants[VariantId.DARK][platformId].colors = {
          ...variants[VariantId.DARK][platformId].colors,
          [variableName]: colorNameValue,
        };
      });
    }
  });

  return {
    [Brand.MAIN]: {
      [Variant.LIGHT]: variants[VariantId.LIGHT][BrandId.MAIN],
      [Variant.DARK]: variants[VariantId.DARK][BrandId.MAIN],
    },
    [Brand.SIDE]: {
      [Variant.LIGHT]: variants[VariantId.LIGHT][BrandId.SIDE],
      [Variant.DARK]: variants[VariantId.DARK][BrandId.SIDE],
    },
  };
};
