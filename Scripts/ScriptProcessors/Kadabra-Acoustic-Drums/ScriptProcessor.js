const var evtList = [];
evtList.reserve(64);
const var rollEvtList = [];
rollEvtList.reserve(64);function onNoteOn()
{
local note = Message.getNoteNumber();

if (note >= 48 && note <= 52)
{
    for (eventId in evtList)
    {
        Synth.noteOffByEventId(eventId);
    }
    evtList.clear();
}

if (note >= 53 && note <= 59)
{
    Message.makeArtificial();
    evtList.push(Message.getEventId());
}	
// Snare choke - keys 24-35 choke rolls on keys 36-41
if (note >= 24 && note <= 35)
{
    for (eventId in rollEvtList)
    {
        Synth.noteOffByEventId(eventId);
    }
    rollEvtList.clear();
}

if (note >= 36 && note <= 41)
{
    Message.makeArtificial();
    rollEvtList.push(Message.getEventId());
}
}
 function onNoteOff()
{
	local note = Message.getNoteNumber();
	if (note >= 53 && note <= 59)
	{
	    Message.ignoreEvent(true);
	}
	if (note >= 36 && note <= 41)
	{
	    Message.ignoreEvent(true);
	}
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 