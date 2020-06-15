class Form{
    constructor(){
        this.thankyou = createElement('h1');

        this.nameInput = createInput("");
        this.nameInput.style('width', '120px');
        
        this.email = createInput("");
        this.email.style('width', '120px');

        this.submit = createButton('Submit'); 

        this.title = createElement('h1');

        this.name = createElement('h2');

         this.emailInput = createElement('h2');

        this.reset = createButton('Reset');


        this.submit.style('width','120px');
        this.submit.style('height','60px');
        this.submit.style('background','pink');

        this.reset.style('width','120px');
        this.reset.style('height','60px');
        this.reset.style('background','pink');

        this.question1 = createElement('h3', "What is your age?");
        this.question1.style('color', 'rgb(255,0,0)');

        this.ques1Input = createInput("");
        this.ques1Input.style('width', '100px');


        this.question2 = createElement('h3', "Do you think online classes are necessary?");
        this.question2.style('color', 'rgb(255,0,0)');

        this.option1 = createRadio('h5');
        this.option1.option('YES');
        this.option1.option('NO');
        this.option1.style('width', '60px');


        this.question3 = createElement('h3', "Do you think schools should reopen?");
        this.question3.style('color', 'rgb(255,0,0)');

        this.option2 = createRadio('h5');
        this.option2.option('YES');
        this.option2.option('NO');
        this.option2.style('width', '60px');


        this.question4 = createElement('h3', "Lastly, do you think during online school, there should be a fitness class?");
        this.question4.style('color', 'rgb(255,0,0)');

        this.option3 = createRadio('h5');
        this.option3.option('YES');
        this.option3.option('NO');
       this.option3.style('width', '60px');
        


        
    }
    display(){
        this.title.html("SURVEY");
        this.title.position(windowWidth/2 -50, 15);

        this.name.html("Your Name");
        this.name.position(20 ,70);
        this.nameInput.position(150 , 90);

        this.emailInput.html("Your Email");
        this.emailInput.position(950, 70);
        this.email.position(1080, 90);

        this.submit.position(displayWidth/2 + 100, displayHeight-250);

        this.reset.position(displayWidth/2 - 200, displayHeight-250);

        this.question1.position(60, 150);
        this.ques1Input.position(75, 200);
        
        this.question2.position(60, 300);
        this.option1.position(105, 350);

        this.question3.position(820, 150);
        this.option2.position(910, 190);

        this.question4.position(820, 300);
        this.option3.position(910, 380);

   
        this.submit.mousePressed(() => {
            this.thankyou.show();

            this.thankyou.html("Thank you!!!");
            this.thankyou.position(displayWidth/2 - 200, 150);
            this.thankyou.style('width', '500px');
            this.thankyou.style('height', '50px');
            this.thankyou.style('padding','30px');
            this.thankyou.style('Color','rgb(35,71,215)');

           
            voter.nameInput = this.nameInput.value();
            voter.email = this.email.value();
            voter.ques1Input= this.radio.value();
            voter.option1= this.option1.value();
            voter.option2= this.option2.value();
            voter.option3= this.option3.value();
            voterCount += 1;
            voter.index = voterCount;
            voter.update();
            voter.updateCount(voterCount);
            

            
        });
        this.reset.mousePressed(() => { 
          this.thankyou.hide();
         
          this.nameInput.value('');
          this.email.value('');
          this.ques1Input.value('');

          this.option1.value();
          this.option2.value();
          this.option3.value();
        }); 
       
    }
}