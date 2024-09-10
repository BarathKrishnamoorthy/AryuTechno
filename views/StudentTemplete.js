const StudentTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meeting Schedule</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            background-image: url(../Aryu/bg6.svg);
        }
        h1{
            text-align: center;
            font-size: 100px;
            font-weight: bolder;
            font-family: 'Times New Roman', Times, serif;
        }
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    font-size: 40px;
    color: red;
}
p{
    font-family: 'Times New Roman', Times, serif;
    font-size: xx-large;
    text-align: center;
    
}
h3{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: oblique;
    color: red;
    font-size:30px;
}


@media only screen and (max-width: 600px) {
            h1 {
                font-size: 24px;
                padding: 15px;
                font-family: 'Times New Roman', Times, serif;
            }
            footer {
                padding: 15px;
            }
            p {
                font-size: 15px;
            }
            h2 {
                font-size: 15px;
                color: blue;
            }
            h3 {
                font-size: 16px;
            }
        }

        
    </style>
</head>
<body>
    <header>
        
    <h1>Welcome to Aryu Technology</h1>

        

    </header>
    <footer>
        <h2>Welcome To Aryu Academy</h2>
        <p>Dear {name}, your Meeting is scheduled for tomorrow. Kindly visit our office </p>
        
   <h3> <b>Office Location at:</b>  </h3>
   <p>Aryu Enterprises Private Limited, No 33/ 14 , Ground floor, Jayammal St, Ayyavoo Colony <br>, Aminjikarai, Chennai, Tamil Nadu 600029</p>
   
    </footer>
</body>
</html>
`;

module.exports = StudentTemplate;
