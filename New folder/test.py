class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

node1 = Node("RMA")
node2 = Node("BVB")
node3 = Node("LFC")





node1.next = node2
node2.next = node3


new_head = Node("BAR")
new_head.next = node1
 


new_node = Node("FCB")

current_node = new_head
while current_node.next:
    current_node = current_node.next


current_node.next = new_node
new_node1=Node("ATM")
count = 0
current_node = new_head


        
while current_node:
    count += 1
    current_node = current_node.next


mid= count // 2


current_node = node1
for i in range(mid - 1):
    current_node = current_node.next



new_node1.next = current_node.next
current_node.next = new_node1


if new_head is not None:
    new_head = new_head.next
    
current_node1 = new_head
     
while current_node1:
    current_node1 = current_node1.next
    if current_node1.next.next==None:
        current_node1.next=None
        break
    


output_string = "\n"
current_node = new_head
while current_node:
    output_string += current_node.data + "\n"+"\n"
    current_node = current_node.next

print(output_string)


