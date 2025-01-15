function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // merge two array
    // get median
    // 1. do it without merge
    /// 1.1 calculate whether res array's length is even or odd
    /// calculate median of 
    /// 2.1. three cases: 
    //// 2.1.1 first array's last el is less than first el of second one
    //// 2.1.1 first array's first el is more than second el of second one
    // 2. do it with merge and with fast sorting (easiest way because sort algo could be googled)
    // 3. put all items in dictionary, 

    return medianWithDictionary(nums1, nums2);
};

type Dictionary = {
    [key: number]: number | undefined
}

function medianWithDictionary(nums1: number[], nums2: number[]): number {
    const dict: Dictionary = {};
    let count = 0;
    nums1.forEach(n => {
        const exists = !dict[n];
        if (!exists) return;
        dict[n] = n;
        count++;
    });
    nums2.forEach(n => {
        const exists = !dict[n];
        if (!exists) return;
        dict[n] = n;
        count++;
    });
    const isEven = count % 2 === 0;
    // let median = 0;
    // if (isEven) {
    //     median = 
    // }

    return isEven ? 1 : 0;
}

function medianWithPartialMerge(nums1: number[], nums2: number[]): number {
    const areBoundariesKnown = nums1[0] !== nums2[0];

    if (areBoundariesKnown) {
        return nums1[0] > nums2[0] ? caseWithExactBorders(nums1, nums2) : caseWithExactBorders(nums2, nums1);
    }

    return 0;
}

function caseWithExactBorders(smallest: number[], biggest: number[]): number {
    const expectedLength = smallest.length + biggest.length;
    const medianIndex = Math.floor(expectedLength / 2) - 1;
    const isEven = expectedLength % 2 === 0;

    if (medianIndex >= smallest.length) {
        if (isEven)
            return biggest[medianIndex % biggest.length] + biggest[medianIndex % biggest.length + 1];

        return biggest[medianIndex % biggest.length];
    } else if (medianIndex === smallest.length - 1) {
        if (isEven)
            return smallest[medianIndex] + biggest[0];
            
        return smallest[medianIndex];
    } else {
        if (isEven)
            return biggest[medianIndex % biggest.length] + biggest[medianIndex % biggest.length + 1];

        return smallest[medianIndex]
    }
}