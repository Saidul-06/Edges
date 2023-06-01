<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countries</title>
    <style>
        #all-countries{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }
        .country{
            border: 2px solid tomato;
            padding: 10px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h2>All Countries</h2>
    <section id="country-detail">
        
    </section>
    <section>
        <div id="all-countries">

        </div>
    </section>
    <script src="js/countries.js"></script>
</body>
</html>