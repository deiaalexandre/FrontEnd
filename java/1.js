//alert("Seja Bem Vindos");
//document.write("Bem Vindo ao Java Script");
//prompt("digite seu nome");
//resp = confirm("Será que vai chover?");
//alert("um retorno de carro\bem no meio desta lina");
//alert("\"Isto não saiu como deveria!|\" disee ela");
//alert(" esta linha tem tabulação\taqui");

//var a, b;
//a=5;
//b="5kg de acucar";
//document.write(" o valor da variavel A é:"+a);
//document.write("<p>" + "o valor da variavel B é:"+b+" <p>");
//document.write("<p>" + "o valor da variavel A dividido por 2 é:"+a/2 +"</p>");
//document.write("<p>" + "o valor da variavel B dividido por 2 é:"+b/2 +"</p>");

//var a, inteiro, flutuante;
//a="45.78 kg de açucar";
//inteiro =  parseInt(a);
//flutuante = parseFloat;
//document.write(" o valor da variavel A é:"+a);
//document.write("<p>" + "o valor mumerico interiro da variavel é:"+inteiro+" <p>");
//document.write("<p>" + "o valor da variavel A dividido por 2 é:"+inteiro/2 +"</p>");
//document.write("<p>" + "o valor da variavel decimal da variavel é:"+flutuante+"</p>");

//var a, b,c;
//a="Ola pessoal!";
//b="Sejam bem vindos ao JavaScript";
//c=a+b;
//alert(c);


//divisão
//a= 50;
//b=2;
//c=a / b;
//document.write("<br>" +c);


// mutiplicação
//a= 100;
//b=5;
//c=a / b;
//document.write("<br>" +c);


//a= 25;
//b=2;
//c=a / b;
//document.write("<br>" +c);

//hoje =  new Date();
//xDia = hoje.getDay ();
//diaSemana = new Array(7);
//diaSemana[0]="domingo";
//diaSemana[1]="segunda";
//diaSemana[2]="terça";
//diaSemana[3]="quarta";
//diaSemana[4]="quinta";
//diaSemana[5]="sexta";
//diaSemana[6]="sabado";
//document.write(" o numero da semana é:"+" "+(xDia + 1));
//ocument.write("<p><b>" + "hoje é:" + diaSemana[xDia]);


dia semana

hoje =  new Date();
xDia = hoje.getDay ();
diaSemana = new Array(7);
pratoDia = new Array(7);
precoDia = new Array(7);

//dia semana

diaSemana[0]="domingo";
diaSemana[1]="segunda";
diaSemana[2]="terça";
diaSemana[3]="quarta";
diaSemana[4]="quinta";
diaSemana[5]="sexta";
diaSemana[6]="sabado";


// prato dia

pratoDia[0]=" Caldo verde";
pratoDia[1]=" Bife acebolado";
pratoDia[2]="Rabada";
pratoDia[3]="Feijoada";
pratoDia[4]="Espaguente ao sugo";
pratoDia[5]="Dobradinha";
pratoDia[6]="Baião de dois";

// preço prato

precoDia[0]="R$ 12,00";
precoDia[1]="R$ 18,00";
precoDia[2]="R$ 20,00";
precoDia[3]="RS 28,00";
precoDia[4]="R$ 25,00";
precoDia[5]="R$ 23,00";
precoDia[6]="R$ 35,00";

document.write(" o numero da semana é:"+" "+(xDia + 1));
document.write("<p><b>" + "hoje é:" + diaSemana[xDia]);
document.write("<p><b>" + "temos :" + pratoDia[xDia]);
document.write("<p><b>" + "no valor de:" + precoDia[xDia]);*/


/for(i=1;i<5; i++){

    document.write(" Esta e a linha",i, "<br>");
}*/


valor =  new Array(3,2,4,1,5);
i=0;
total = 0;
while(total<10){
    total + =valor[i];i++;

}
document.write("Total =" + total); 




