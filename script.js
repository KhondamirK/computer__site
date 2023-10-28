//TIMER VARUABLES

var d = 10
var h = 23
var m = 59
var s = 60

var dBlock = document.querySelector('.days')
var hBlock = document.querySelector('.hours')
var mBlock = document.querySelector('.minutes')
var sBlock = document.querySelector('.seconds')

var timerEnd = false


//PROGRESS LINE VARUABLES
var startMoney = 0
var startPer = 0
var money = 900000
var maxMoney = 1000000
var icon = "₽"
var statsValue = document.querySelector('.stats__value')
var statsFinish = document.querySelector('.finish')
var progressLine = document.querySelector('.progress .progress-line')

//TIMER AND ANIMATION


function startTimer(){
	dBlock.innerHTML = d
	hBlock.innerHTML = h
	mBlock.innerHTML = m
	sBlock.innerHTML = s

	setTimeout(() => {
		if (s > 0){
			s -= 1
			sBlock.innerHTML = s
			startTimer()
		}
		else{
			if (m > 0){
				s = 60
				m -= 1 
				mBlock.innerHTML = m
				startTimer()
			}
			else{
				
				if (h > 0){
					m = 59
					mBlock.innerHTML = m
					h -= 1
					hBlock.innerHTML = h
					startTimer()
				}
				else{
					

					if (d > 0){
						h = 23
						hBlock.innerHTML = h
						d -= 1
						dBlock.innerHTML = d
						startTimer()
					}
					else{
						if(m > 0){
							startTimer()
						}
						else{
							if (s > 0){
								startTimer()
							}
							else{
								timerEnd = true
							}
						}
					}
				}
			}
		}
	}, 1000);
}
startTimer()



//PROGRESS AND ANIMATION 

function percent(){
	var per = (money * 100)/ maxMoney
	console.log(per)
	// progressLine.style.maxWidth = `${per}%`
	// statsValue.innerHTML = money + icon
	setTimeout(()=>{
		if(startMoney < money){
			if(money > 10000){
				startMoney += 1000
			}
			else if(money>100 % money < 10000){
				startMoney += 100
			}
			//PERCENT LINE 

			if(startPer < per){
				startPer += 0.1
				progressLine.style.maxWidth = `${startPer}%`
			}
			statsValue.innerHTML = startMoney + icon
			percent()
		}
	}, 1);
}
percent()


let navToggler = document.querySelector('.nav__toggler')
let navInner = document.querySelector('nav .inner')
let lock = document.querySelector('body')
let overlay = document.querySelector('.main__overlay')
// navToggler.addEventListener("click", openBurger())
navToggler.addEventListener("click", function(){
	navToggler.classList.toggle('active')
	navInner.classList.toggle('active')
	lock.classList.toggle('lock')
	overlay.classList.toggle('active')
})
