
         var data1=document.getElementById("name")
         var data2=document.getElementById("age")
         var data3=document.getElementById("email")
        
         var tbod=document.getElementById("tablebody")
         function change(){
            var newrow=document.createElement("tr")
            var newdata1=document.createElement("td")
            newdata1.textContent=data1.value
            newrow.append(newdata1)
            var newdata2=document.createElement("td")
            newdata2.textContent=data2.value
            newrow.append(newdata2)
            var newdata3=document.createElement("td")
            newdata3.textContent=data3.value
            newrow.append(newdata3)
            var data4 = document.querySelectorAll('input[name="gender"]');
            var value = '';
            for (var i = 0; i < data4.length; i++) {
                if (data4[i].checked) {
                    value = data4[i].value;
                    break; // Exit the loop once the checked radio is found
                }
            }

            var newdata4 = document.createElement("td");
            newdata4.textContent = value; // Add the selected gender value
            newrow.append(newdata4);

            var data5=document.querySelectorAll('input[name="courses"]')
            var selectedCourses=[]
            for(j=0;j<data5.length;j++){
                if(data5[j].checked){
                    selectedCourses.push(data5[j].value)
                }
            }
           
            var selectedCourses = [];
            var courseCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            for (var j = 0; j < courseCheckboxes.length; j++) {
                if (courseCheckboxes[j].checked) {
                    selectedCourses.push(courseCheckboxes[j].nextSibling.nodeValue.trim());
                }
            }
            var newdata5 = document.createElement("td");
            newdata5.textContent = selectedCourses.join(", "); // Join selected courses
            newrow.append(newdata5);


           

            // Get the uploaded file
            var fileInput = document.getElementById('resume');
            var file = fileInput.files[0];
            var newdata6 = document.createElement("td");
            if (file) {
                var downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(file);
                downloadLink.textContent = 'Download';
                downloadLink.download = file.name;
                newdata6.appendChild(downloadLink);
            } else {
                newdata6.textContent = 'No file uploaded';
            }
            newrow.append(newdata6);

            tbod.append(newrow)

            // Clear the input fields after saving
            data1.value = '';
            data2.value = '';
            data3.value = '';
            for (var k = 0; k < data4.length; k++) {
                data4[k].checked = false; // Uncheck radio buttons
            }
            for (var l = 0; l < courseCheckboxes.length; l++) {
                courseCheckboxes[l].checked = false; // Uncheck checkboxes
            }
            fileInput.value = ''; 
         }
      
      
      
    