function LogIn(form) {
        let name = form.username.value;
        let password = form.password.value;
        if (name == "staff" && password == "nam") {
            location.href = 'staff.html';
        } else if (name == "lecturer" && password == "nam") {
            location.href = 'lecturer.html';
        } else if (name == "student" && password == "nam") {
            location.href = 'student.html';
        } else {
            alert("User is not exist!!")
        }
}