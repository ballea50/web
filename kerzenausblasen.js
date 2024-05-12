function kerzenausblasen(anzahlKerzen)
{
    //alert(anzahlKerzen);
    var kerzenZustandsliste = Array(anzahlKerzen);
    kerzenZustandsliste.fill(1);
    var brennendeKerzen = anzahlKerzen
    console.log(kerzenZustandsliste);
    //alert(kerzenZustandsliste)
    const MAXSCHRITTE = 3;

    var z = 0
    var kerzenPosition = 0
    while (brennendeKerzen > 1)
    {
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
    alert(kerzenZustandsliste)

}
