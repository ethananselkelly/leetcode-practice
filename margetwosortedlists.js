// traversing linked lists
// while loop to run as long as both lists contain a node

const mergeTwoLists = function(list1, list2) {
    // create new linked list with dummy ListNode
    let mergedList = new ListNode(0)

    // reference to head of new linked list
    let headOfMergedList = mergedList

    //while loop 
    while (list1 != null && list2 != null) {
        // find smaller value of the two head elements
        // add smaller element to new list
        if (list1.val < list2.val) {
            mergedList.next = list1
            list1 = list1.next
        } else {
            mergedList.next = list2
            list2 = list2.next
        }

        mergedList = mergedList.next
    }

    
    if (list1 == null) {
        mergedList.next = list2
    } else {
        mergedList.next = list1
    }

    // this points to head of finished linked list
    return headOfMergedList.next
}