function kerzenausblasen(anzahlKerzen)
{
    
    var kerzenZustandsliste = Array(anzahlKerzen);
    // 1 bedeutet: Kerze brennt
    // 0 bedeutet: Kerze wurde ausgeblasen
    kerzenZustandsliste.fill(1);
    var brennendeKerzen = anzahlKerzen
    console.log(kerzenZustandsliste);
    //alert(kerzenZustandsliste)
    const MAXSCHRITTE = 3;

    var z = 0
    var kerzenPosition = 0
    //Solange noch mehr als 1 Kerze brennt
    while (brennendeKerzen > 1)
    {
        //Nur brennende Kerzen werden beim Zählen berücksichtigt
        if (kerzenZustandsliste[kerzenPosition] == 1)
            {
                z = z + 1;
                if (z == MAXSCHRITTE)
                {
                    //Lösche Kerze
                    kerzenZustandsliste[kerzenPosition] = 0; 
                    brennendeKerzen = brennendeKerzen - 1;
                    console.log(kerzenZustandsliste);
                    z = 0;
                }


            }
        //Vorrücken auf nächste Position             
        kerzenPosition = kerzenPosition + 1;
        if (kerzenPosition == anzahlKerzen)
                kerzenPosition = 0;     
    }
    console.log(kerzenZustandsliste);
   
    //Welche Kerze brennt noch ?
    var positionBrennt = kerzenZustandsliste.indexOf(1) + 1;
    return positionBrennt;

}
