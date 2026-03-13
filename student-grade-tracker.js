
        function generateReport() {
    // Get input values
    const name = document.getElementById("name").value.trim();
    const math = Number(document.getElementById("math").value);
    const english = Number(document.getElementById("english").value);
    const science = Number(document.getElementById("science").value);
    const computer = Number(document.getElementById("computer").value);

    // Validate input
    if (!name || isNaN(math) || isNaN(english) || isNaN(science) || isNaN(computer)) {
        alert("Please fill in all fields with valid numbers!");
        return;
    }

    // Calculate average
    const average = ((math + english + science + computer) / 4).toFixed(2);

    // Determine letter grade
    let letterGrade = "";
    if (average >= 85){
        letterGrade = "A";
        remarks = "Excellent performance. Keep up the great work!";
    }
    else if (average >= 75){
        letterGrade = "B";
        remarks = "Excellent performance. Keep up the great work!";
    }
    else if (average >= 65){ 
        letterGrade = "C";
        remarks = "Excellent performance. Keep up the great work!";
    }
    else if (average >= 50){ 
        letterGrade = "D";
        remarks = "Fair performance. More effort is needed.";
    }
    else{ 
        letterGrade = "F";
        remarks = "Poor performance. Immediate improvement required.";
    }

    // Display report
    const reportDiv = document.getElementById("report");
    reportDiv.innerHTML = `
        <h2>Report Card for ${name}</h2>
        <p>Math: ${math}</p>
        <p>English: ${english}</p>
        <p>Science: ${science}</p>
        <p>Computer Studies: ${computer}</p>
        <p><strong>Average: ${average}</strong></p>

        <p><strong>Letter Grade: ${letterGrade}</strong></p>
        <p><strong>Final Remarks:</strong> ${remarks}</p>
    `;
}