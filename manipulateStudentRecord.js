function manipulateStudentRecord(obj, operation, prop, newValue) {
    const result = { ...obj };

    if (operation === 'delete' && prop in result) {
        delete result[prop];
    } else if (operation === 'edit' && newValue !== undefined && newValue !== null) {
        result[prop] = newValue;
    }

    return result;
}

const studentRecord = {
    name: 'John',
    age: 20,
    grade: 'A'
}

const deleteRecord = manipulateStudentRecord(studentRecord, 'delete', 'age');
console.log(deleteRecord)

const editedRecord = manipulateStudentRecord(studentRecord, 'edit', 'grade','B');
console.log(editedRecord)