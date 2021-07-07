class MergeSort {
    constructor(arr) {
        this.arr = this.sort(arr)
        console.log(this.arr)
    }

    compare = (left, right, arr) => {
        left[0] < right[0]
            ? arr.push(left.shift())
            : arr.push(right.shift())

        if (left.length && right.length) return this.compare(left, right, arr)

        return arr
    }

    merge = (left, right) => {
        let newArr = []

        left.length && right.length
            ? newArr = this.compare(left, right, newArr)
            : null

        return [...newArr, ...left, ...right]
    }
    
    sort = arr => {
        const newArr = [...arr]

        if (newArr.length <= 1) return newArr

        const left = newArr.splice(0, newArr.length / 2)
        return this.merge(this.sort(left), this.sort(newArr))
    }
}

const arr = new MergeSort([5, 0, 4, -2, -1, -5, 2, -4, 3, -3, 6])
