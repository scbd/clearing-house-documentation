export function mergeSwaggerWithBase(baseSkeleton, dataToMerge, keysToMerge) {
  keysToMerge.forEach((key) => {
      if (dataToMerge[key]) {
          // If the key exists in both base and dataToMerge, we merge the content
          baseSkeleton[key] = mergeDeep(baseSkeleton[key], dataToMerge[key]);
      }
  });

  return baseSkeleton;
}

// A helper function to perform a deep merge of objects
function mergeDeep(target, source) {
  if (typeof target !== 'object' || typeof source !== 'object') {
      return source;
  }

  // Loop through all properties in source
  for (let key in source) {
      if (source.hasOwnProperty(key)) {
          if (target[key] && typeof source[key] === 'object') {
              // If both target and source are objects, recursively merge them
              target[key] = mergeDeep(target[key], source[key]);
          } else {
              // Otherwise, just copy the source property to target
              target[key] = source[key];
          }
      }
  }

  return target;
}