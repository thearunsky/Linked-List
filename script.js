class Nodes {

    // Simply, This take a value
    constructor(value) {

        // Store it in haed
        this.head = {
            value: value,
            next: null
        }

        // At the first this node will also the tail of list
        this.tail = this.head

        // Now we increase size of node
        this.size = 1
    }

    // It will add node at the end of linked list
    append(value) {
        // It create a new node
        let newNode = {
            value: value,
            next: null
        }

        if(this.head==null){
            this.head = newNode
            this.tail = this.head
        }

        // this.tail.next = this.head.next = newNode
        this.tail.next = newNode

        // Now it become tail of list
        this.tail = newNode

        // Now, we increase again size of list
        this.size++
    }
    // If simple show you all node list
    traversing() {
        let count = 1
        let currentNode = this.head
        while (!(currentNode === null)) {

            let main = document.createElement("div")
            main.classList.add("nodeBorder", "col-2", "col-lg-1")
            let inner = `<span class="node">${currentNode.value}</span> <i class="fa-solid fa-arrow-right"></i>`
            main.innerHTML = inner

            document.getElementById("append_node").appendChild(main)
            currentNode = currentNode.next
            count++
        }
    }
    appendMid(index, value) {

        if (index > this.size) {
            alert("Please enter valid index number")
        }
        else if (index == 1) {
            let temp = this.head
            let newNode = {
                value: value,
                next: temp
            }
            this.head = newNode
            this.size++
        }
        else {
            let count = 1
            let curretNode = this.head
            while (count < index - 1) {
                curretNode = curretNode.next
                count++
            }
            let newNode = {
                value: value,
                next: curretNode.next
            }
            curretNode.next = newNode
            this.size++
        }

    }
    appendFront(value) {
        // It create a new node
        let newNode = {
            value: value,
            next: null
        }
        let temp = this.head
        this.head = newNode
        this.head.next = temp
        this.size++
    }
    update(index, value) {

        if (index > this.size) {
            alert("Please enter valid index number")
        } else {
            let count = 1
            let currentNode = this.head
            while (count <= this.size) {

                if (index == count) {
                    currentNode.value = value
                    break
                }

                currentNode = currentNode.next
                count++
            }
        }

    }
    delete(index) {
        if (index > this.size) {
            alert("Please enter valid index number")
        } else {
            let count = 1
            let currentNode = this.head
            if (index == 1) {
                this.head = this.head.next
            } else {
                while (count <= this.size) {
                    if (count == index - 1) {
                        currentNode.next = currentNode.next.next
                        this.size--
                        break
                    }

                    currentNode = currentNode.next
                    count++
                }
            }
        }

    }
    searchByValue(value) {

        let count = 1
        let currentNode = this.head

        while (count <= this.size) {
            if (currentNode.value == value) {
                alert(`Got it, ${value} node is present at index number ${count}`);
                break
            }
            currentNode = currentNode.next
            count++
            if(count>this.size){
                alert(`${value} node is NOT present in this node`);
            }
        }
    }
    searchByIndex(index) {

        if(index>this.size){
            alert("Please enter valid index number")
        }else{
            let count = 1
            let currentNode = this.head
    
            while (count <= this.size) {
                if (count == index) {
                    alert(`${currentNode.value} node is present at index number ${index}`);
                    break
                }
    
                currentNode = currentNode.next
                count++
            }
        }

    }
    swap() {
        let count = 1
        let current = this.head

        while (count <= this.size) {
            if (!(current.next == null)) {
                if (!(count % 2) == 0) {
                    let temp = current.value
                    current.value = current.next.value
                    current.next.value = temp
                }
            }
            current = current.next
            count++
        }
    }

    reverse(){
        if(this.size>1){

            let temp;
            let prev = null;
            let curr = this.head
            while(!(curr==null)){
                temp = curr.next
                curr.next = prev
                prev = curr  
                curr = temp
            }

            this.head = prev
        }
    }

}

let a = prompt("What will be the head of your linked list ?")

let list = new Nodes(a)
list.traversing()


document.getElementById("Add_Node_End_Btn").addEventListener("click", (e) => {
    let newNode = document.getElementById("Add_Node_End_Value").value
    list.append(newNode)
    document.getElementById("append_node").innerHTML = ""
    list.traversing()
    document.getElementById("Add_Node_End_Value").value = ""
})


document.getElementById("Add_Node_Mid_Btn").addEventListener("click", (e) => {
    let newNode_V = document.getElementById("Add_Node_Mid_Value").value
    let newNode_I = document.getElementById("Add_Node_Mid_Index").value
    list.appendMid(newNode_I, newNode_V)
    document.getElementById("append_node").innerHTML = ""
    list.traversing()

    document.getElementById("Add_Node_Mid_Value").value = ""
    document.getElementById("Add_Node_Mid_Index").value = ""
})


document.getElementById("Add_Node_First_Btn").addEventListener("click", (e) => {
    let newNode = document.getElementById("Add_Node_First_Value").value
    list.appendFront(newNode)
    document.getElementById("append_node").innerHTML = ""
    list.traversing()
    document.getElementById("Add_Node_First_Value").value = ""
})

document.getElementById("Update_Btn").addEventListener("click", (e) => {
    let newNode_V = document.getElementById("Update_Value").value
    let newNode_I = document.getElementById("Update_Index").value
    list.update(newNode_I, newNode_V)
    document.getElementById("append_node").innerHTML = ""
    list.traversing()

    document.getElementById("Update_Value").value = ""
    document.getElementById("Update_Index").value = ""
})


document.getElementById("Delete_Btn").addEventListener("click", (e) => {
    let index = document.getElementById("Delete_Index").value
    list.delete(index)
    document.getElementById("append_node").innerHTML = ""
    list.traversing()
    document.getElementById("Delete_Btn").value = ""
})

document.getElementById("Search_Value_Btn").addEventListener("click", (e) => {
    let value = document.getElementById("Search_Value").value
    list.searchByValue(value)
    document.getElementById("Search_Value").value = ""
})
document.getElementById("Search_Index_Btn").addEventListener("click", (e) => {
    let index = document.getElementById("Search_Index").value
    list.searchByIndex(index)
    document.getElementById("Search_Index").value = ""
})
document.getElementById("swap").addEventListener("click", (e) => {
    document.getElementById("append_node").innerHTML = ""
    list.swap()
    list.traversing()
})
document.getElementById("reverse").addEventListener("click", (e) => {
    document.getElementById("append_node").innerHTML = ""
    list.reverse()
    list.traversing()
})