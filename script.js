function calculate() {

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);

    if (
        m1 < 0 || m1 > 100 ||
        m2 < 0 || m2 > 100 ||
        m3 < 0 || m3 > 100 ||
        m4 < 0 || m4 > 100 ||
        m5 < 0 || m5 > 100
    ) {
        document.getElementById("result").innerHTML =
        "Please enter marks between 0 and 100.";
        return;
    }

    let total = m1 + m2 + m3 + m4 + m5;
    let average = total / 5;

    let grade;

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 50)
        grade = "D";
    else
        grade = "F";

    document.getElementById("result").innerHTML =
        "Total: " + total +
        " | Average: " + average.toFixed(2) +
        " | Grade: " + grade;
}