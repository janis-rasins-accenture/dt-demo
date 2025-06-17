const fs = require('fs');
const path = require('path');

// Folders to ignore
const ignoreFolders = ['node_modules', '.nx'];

function deleteFolderRecursive(folderPath) {
  try {
    if (fs.existsSync(folderPath)) {
      fs.readdirSync(folderPath).forEach((file) => {
        const curPath = path.join(folderPath, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(folderPath);
      // console.log(`Deleted: ${folderPath}`); // uncomment to view each deleted file
    }
  } catch (err) {
    console.error(`Error deleting ${folderPath}: ${err.message}`);
  }
}

function scanAndRemoveDistFolders(startPath) {
  try {
    // Check if the path exists
    if (!fs.existsSync(startPath)) {
      console.log('Starting path does not exist:', startPath);
      return;
    }

    // Read directory contents
    const files = fs.readdirSync(startPath);

    for (const file of files) {
      const filePath = path.join(startPath, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      // Skip ignored folders
      const libPath = startPath.match(/dt-demo[\\/]libs[\\/]/gi);
      const libNodeModulesPath = !!libPath && file === 'node_modules';
      if (isDirectory && ignoreFolders.includes(file) && !libNodeModulesPath) {
        continue;
      }

      // If it's a 'dist' folder, delete it
      if (isDirectory && (file === 'dist' || libNodeModulesPath)) {
        console.log(`Deleting dist folder: ${filePath}`);
        deleteFolderRecursive(filePath);
      }
      // If it's a directory (but not 'dist'), scan it
      else if (isDirectory) {
        scanAndRemoveDistFolders(filePath);
      }
    }
  } catch (err) {
    console.error('Error scanning directory:', err);
  }
}

// Get the current working directory
const rootDir = process.cwd();
console.log('Starting scan from:', rootDir);

// Start the scan
scanAndRemoveDistFolders(rootDir);
console.log('Scan complete!');
