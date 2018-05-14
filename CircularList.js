class Node {
    constructor (element) {
        this.element = element
        this.next = null
    }
}
class CircularList {
    constructor () {
        this.head = null
        this.tail = null
        this.current = null
        this.length = 0
    }
    append (element) {
        let node = new Node(element)
        if (this.head === null) {
            this.head = node
            this.tail = node
            this.current = node
            this.tail.next = this.head
        } else {
            let current = this.head
            while (current.next != this.head) {
                current = current.next
            }
            current.next = node
            this.tail = node
            this.tail.next = this.head
        }
        this.length++
    }
    removeAt (position) {
        if (position > -1 && position < this.length) {
            let current = this.head
            let prev
            let index = 0
            if (position === 0) {
                if (this.current === this.head) {
                    this.current = current.next
                }
                this.head = current.next
                this.tail.next = this.head
            } else {
                while (index++ < position) {
                    prev = current
                    current = current.next
                }
                if (this.current === current) {
                    this.current = current.next
                }
                prev.next = current.next
                if (position === this.length - 1) {
                    this.tail = prev
                }
            }
            this.length--
            return current.element
        } else {
            return null
        }
    }
    insert (position, element) {
        let node = new Node(element)
        if (position > -1 && position < this.length) {
            let current = this.head
            let prev
            let index = 0
            if (position === 0) {
                node.next = this.head
                this.head = node
                this.tail.next = this.head
            } else {
                while (index++ < position) {
                    prev = current
                    current = current.next
                }
                prev.next = node
                node.next = current
                if (position === this.length - 1) {
                    this.tail = prev
                }
            }
            this.length++
            return true
        } else {
            return false
        }
    }
    indexOf (element) {
        let current = this.head
        let index = 0
        while (current.next != this.head) {
            if (current.element === element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
    remove (element) {
        let position = this.indexOf(element)
        return this.removeAt(position)
    }
    isEmpty () {
        return this.length === 0
    }
    size () {
        return this.length
    }
    getHead () {
        return this.head
    }
    getCurrent () {
        return this.current
    }
    changeCurrent () {
        this.current = this.current.next
    }
}
export default CircularList
