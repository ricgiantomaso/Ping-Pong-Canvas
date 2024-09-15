class Bola{ 
    constructor(c, pad,cpu){
        this.c = c;
        this.pad = pad;
        this.movendo = false;
        this.dirX = -1;
        this.dirY = 0;
        this.vel = 8;
        this.largura = 20;
        this.altura = 20;
        this.x=(this.c.canvas.width/2)-(this.largura/2); // começar no meio do campo
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        

    }

    iniciar(){
        this.movendo=true;       
        this.dirY = (Math.random()*10 > 5 ? -1 : 1);
        textWinner = "";
    }

    management()
    {
        if (this.movendo){
            this.x += (this.dirX * this.vel);
            this.y += (this.dirY * this.vel);
            //colisão bordas x
            if (this.x >= (this.c.canvas.width - this.largura)){
                this.dirX = -1;
                pontoJogador1++;
                this.resetBall();      
                this.dirX = -1;

            }
            if (this.x <= 0){
                this.dirX = 1;
                pontoJogador2++;
                this.resetBall();
                this.dirX = 1;
            }
            //colisão bordas y
            if (this.y >= (this.c.canvas.height - this.altura)){
                this.dirY *= -1;
            }
            if (this.y <= 0){
                this.dirY *= -1;
            }

            if ((this.x <= this.pad.x + this.pad.largura) && (this.x + this.largura >= this.pad.x)
            && ((this.y + this.altura >= this.pad.y) && (this.y <= this.pad.altura+ this.pad.y)))
            {
                this.dirX = 1;
                this.dirY = ((this.y + (this.altura/2))-(this.pad.y + (this.pad.altura/2)))/16;
            }
    }

    }

    resetBall()
    {
        this.movendo=false;
        setTimeout(() => 
        { 
        this.x=(this.c.canvas.width/2)-(this.largura/2);
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        pad.x=10;
        pad.y=(this.c.canvas.height/2)-(pad.altura/2);
        cpu.x=(this.c.canvas.width - cpu.largura - 10);
        cpu.y=(this.c.canvas.height/2)-(cpu.altura/2);
        // this.iniciar();
        }, 2000);
    }

    draw(){
        this.management();
        this.c.fillStyle = "black";
        this.c.fillRect(this.x,this.y,this.largura, this.altura);

    }
   
}






