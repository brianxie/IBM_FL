var forbiddenItems = ["bottle", "gun"];

function noItems(ItemList){
    
    for (var i = 0; i < forbiddenItems.length; i++) {
        if (ItemList.indexOf(forbiddenItems[i]) >= 0) {
            alert("Remove " + forbiddenItems[i]);
//            break;
        }
        else {
            alert("Proceed");
            break;
        }
    }
}

var l1 = ["hell", "bottle", "shoes", "gun"];
//var l2 = ["hanger", "shoes"];

noItems(l1);
//noItems(l2);