<?php
   function cryptage($lettre, $mot)
   {
    $tab_alphabet = array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
        
        for ($i=0; $i < count($tab_alphabet); $i++) 
        { 
            if($tab_alphabet[$i] == $lettre)
            {
                //echo "trouvé";
                $position = $i;
                break;
            }
        }
        //obtention de l'alphabet a partir de la lettre clef
        $tab = array_slice($tab_alphabet, @$position);
        $tab_intermediaire = array_slice($tab_alphabet,0,@$position);
        for ($i=0; $i < count($tab_intermediaire); $i++) 
        { 
            array_push($tab, $tab_intermediaire[$i]);
        } 
        /*foreach($tab as $val)
        {
            echo $val." ";
        }*/
        for ($j=0; $j < strlen($mot) ; $j++) 
        { 
            for ($i=0; $i < count($tab_alphabet); $i++)
            { 
                if($mot[$j] == $tab_alphabet[$i])
                {
                    //echo "<br>".$i;
                    $position = $i;
                    echo $tab[$position];
                }
                else if($mot[$j]== "'" or $mot[$j]== " ")
                {
                    echo $mot[$j];
                    break;
                }
            }
        }
    }
   
    cryptage("b", "aller");
?>