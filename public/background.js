chrome.alarms.onAlarm.addListener(
	() => {
		chrome.notifications.create(
			{
				type: "basic",
				iconUrl: "img/open.png",
				title: "Remember to blink your eye",
				message: "Please avoid eye strain and blink a little",
				silent: false
			},
			() => { }
		)
	},
)

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if(request.time){
			createAlarm();
		}
	}
)

function createAlarm(){
	chrome.alarms.create(
		"blink your eyes",
		{
			delayInMinutes: 1,
			periodInMinutes: 1,
		}
	);
}