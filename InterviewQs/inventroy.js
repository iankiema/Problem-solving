function updateInventory(arr1, arr2) {
    const combinedInventory = [...arr1, ...arr2]
    const inventoryMap = {}

    combinedInventory.forEach(([quantity, item]) => {
        inventoryMap[item] = (inventoryMap[item] || 0) + quantity;
    })

    console.log(inventoryMap)

    const updatedInventory = Object.entries(inventoryMap)
    .map(([item, quantity]) => [quantity, item])
    .sort((a,b) => a[1].localeCompare(b[1]))

    return updatedInventory;
}

// Test case
const arr1 = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
  ];
  
  const arr2 = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
  ];
  
  const updatedInventory = updateInventory(arr1, arr2);
  console.log(updatedInventory);