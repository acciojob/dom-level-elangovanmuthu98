//your JS code here. If required.
let parentCount=getParentCount("level");
	alert("The level of the element is: "+(parentCount+1));
		function getParentCount(id){
			let currentChild=document.getElementById(id);
			let count=0;
			while(currentChild.parentElement)
			{
				count++;
				currentChild=currentChild.parentElement;
			}
			return count;
		}