<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio10</title>
</head>
<body>
        <?php
            $nota1 = 10;
            $nota2 = 10;
            $nota3 = 10;
    
            $media = (($nota1 + $nota2 + $nota3) /3);

            if ($media >= 7) {
                echo "Aluno aprovado com média  ". $media;
            } else {
                echo "Aluno reprovado com média " . $media;
            }
            
        ?>
</body>
</html>