//© Michael Karssen 99038898
//Applicatie en media ontwikkelaar


alert('QUIZ! Beantwoord alle vragen! Let op alle antwoorden zijn kleine letters.');

var antwoord = prompt('Hoe wordt de spaarkaart van supermarkt Albert Heijn genoemd?');

if(antwoord == 'bonuskaart'){
    antwoord = prompt('Hoe worden rimpels bij de ooghoeken ook wel genoemd?');
    document.write('Vraag 1: Goed!');
    if(antwoord == 'kraaienpootjes'){
        antwoord = prompt(' Welk stripfiguur is als kind is een ketel met toverdrank gevallen?');
        document.write('<br>' + 'Vraag 2: Goed!');
        if(antwoord == 'obelix'){
            antwoord = prompt('Hoeveel zijdes heeft een dobbelsteen?');
            document.write('<br>' + 'Vraag 3: Goed!');
            if(antwoord == '6'){
                antwoord = prompt('Wat roepen Amerikaanse kinderen die langs de deuren gaan met Halloween?');
                document.write('<br>' + 'Vraag 4: Goed!');
                if(antwoord == 'trick or treat'){
                    antwoord = prompt('In welke maand begint de herfst?');
                    document.write('<br>' + 'Vraag 5: Goed!');
                    if(antwoord == 'september'){
                        antwoord = prompt('Hoe wordt een wond genoemd dat is ontstaan door verbranding van de huid?');
                        document.write('<br>' + 'Vraag 6: Goed!');
                        if(antwoord == 'brandwond'){
                            antwoord = prompt('Waar is je hart spreekwoordelijk van gemaakt als je geen gevoel hebt?');
                            document.write('<br>' + 'Vraag 7: Goed!');
                            if(antwoord == 'steen'){
                                antwoord = prompt('Welk attractie bedoelen de Engelsen met rollercoaster?');
                                document.write('<br>' + 'Vraag 8: Goed!');
                                if(antwoord == 'achtbaan'){
                                    antwoord = prompt('Hoe heet de vriend van de pop Barbie?r');
                                    document.write('<br>' + 'Vraag 9: Goed!');
                                    if(antwoord == 'ken'){
                                        document.write('<br>' + 'Vraag 10: Goed!' + '<br>' + 'Gewonnen!');
                                    }else{
                                        document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:90')
                                    }
                                }else{
                                    document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:80');
                                }
                            }else{
                                document.write('<br>'+ '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:70');
                            }
                        }else{
                            document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:60');
                        }
                    }else{
                        document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:50');
                    }
                }else{
                    document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:40');
                }
            }else{
                document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:30');
            }
        }else{
            document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:20');
        }
    }else{
        document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:10!');
    }
}else{
    document.write('<br>' + '<b>GAME OVER<b>' + '<br>' + '<br>' + 'Punten:0');

}
