function init()
{
	sendEnableFeedback(true);
}

function oscEvent(address, args)
{
	//param "address" is the address of the OSC Message
	//param "args" is an array containing all the arguments of the OSC Message

	var addSplit = address.split("/");
	if(addSplit[1] == "pb")
	{
		if(addSplit[3] == "flash")
		{
			var pb = addSplit[2];
			var flashParam = local.values.playback.flashes.getChild("flash"+pb);
			flashParam.set(args[0]);
		}else{
			var pb = addSplit[2];
			var faderParam = local.values.playback.faders.getChild("fader"+pb);
			faderParam.set(args[0]);
		}
	}
}

function moduleParameterChanged(param)
{
	if(param.is(local.parameters.enableFeedback))
	{
		sendEnableFeedback(true);
	}else if(param.is(local.parameters.disableFeedback))
	{
		sendEnableFeedback(false);
	}
}


function sendEnableFeedback(val)
{
	if(val) local.send("/feedback/pb+exec");
	else local.send("/feedback/off");
}

function setPlaybackLevel(playback, value)
{
	local.send("/pb/"+playback, value);
}

function playbackGo(playback, value)
{
	local.send("/pb/"+playback+"/go");
}


function playbackFlash(playback, value)
{
	local.send("/pb/"+playback+"/flash", value);
}

function blackout(playback, value)
{
	local.send("/dbo", value);
}

function playbackPause(playback)
{
	local.send("/pb/"+playback+"/pause");
}
function playbackRelease(playback)
{
	local.send("/pb/"+playback+"/release");
}

function playbackGotoCue(playback, cue)
{
	local.send("/pb/"+playback+"/"+cue);
}

function page(page)
{
	local.send("/page/"+page);

}

function setExecLevel(page,item,value)
{
	local.send("/exec/"+page+"/"+item, value);
}

function setExecLevel(page,item,value)
{
	local.send("/exec/"+page+"/"+item, value);
}

function setExec(page,item,state)
{
	local.send("/exec/"+page+"/"+item, state);
}