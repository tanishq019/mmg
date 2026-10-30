const P=[['home','Home'],['about','About'],['programs','Programs'],['events','Events'],['fame','Hall of Fame'],['journal','Journal'],['contact','Contact']];
const PR=[
{id:0,t:'Foundations Lab',a:'Students',d:'Weekly hands-on sessions that take you from first circuit and first commit to a working prototype.',ob:['Learn Git, Python and basic electronics','Build one small project every month','Present to the club at term end'],el:'Open to all years and branches.',out:'A project in your portfolio and a peer group to build with.'},
{id:1,t:'Build Sprint',a:'Students',d:'Six weeks, small teams, one real problem. Ship something people can touch.',ob:['Form a team of 3–4','Pick a campus problem','Demo at the showcase'],el:'Members who completed Foundations Lab or have a project already.',out:'A finished, documented prototype and a repository to show.'},
{id:2,t:'Hack Training Track',a:'Students',d:'Prepare for hackathons with timed drills, pitch practice and mentor reviews.',ob:['Practise 6-hour build drills','Learn to pitch in three minutes','Review past winning projects'],el:'Second year and above preferred.',out:'Team readiness for inter-college competitions.'},
{id:3,t:'Industry Sessions',a:'Professionals',d:'Talks and Q&As with engineers working in embedded, cloud, AI and manufacturing.',ob:['Hear how teams ship hardware and software','Ask practitioners about careers','Build a mentor network'],el:'Open to professionals and alumni who want to share or learn.',out:'Connections and practical insight into how the industry works.'},
{id:4,t:'Campus Innovation Partnership',a:'Institutions',d:'Co-run workshops, labs and challenges with other colleges and training bodies.',ob:['Joint workshops and exchange visits','Shared project showcases','Faculty collaboration'],el:'Colleges, schools and training institutes.',out:'A recurring partnership calendar and shared learning resources.'},
{id:5,t:'Corporate Hack Day',a:'Corporate',d:'A one-day challenge where our members work on a problem your team brings.',ob:['Scope a real challenge with your team','Mixed squads of students and mentors','Prototype review at day end'],el:'Companies that can share a safe, non-confidential problem.',out:'Fresh ideas, talent visibility and a working prototype.'}];
const EV=[
{id:0,t:'Embedded Systems Bootcamp',d:[14,'Nov'],c:'Workshop',v:'Seminar Hall, NIET',s:'open'},
{id:1,t:'MMG Hack Night, 24 hours',d:[6,'Dec'],c:'Hackathon',v:'Innovation Lab, NIET',s:'open'},
{id:2,t:'Talk: Machine Learning at the Edge',d:[19,'Dec'],c:'Talk',v:'Auditorium, NIET',s:'soon'},
{id:3,t:'Arduino Basics',d:[2,'Nov'],c:'Workshop',v:'Lab 2, NIET',s:'closed'},
{id:4,t:'Robotics Showcase',d:[12,'Oct'],c:'Showcase',v:'Open Arena, NIET',s:'done'},
{id:5,t:'Intro to Git and GitHub',d:[20,'Sep'],c:'Workshop',v:'Lab 1, NIET',s:'done'}];
const PJ=[
 {t:'Smart Plant Monitor',p:'Hostel gardens lose plants to missed watering.',s:['ESP32','MQTT','React'],b:'Aarav, Meera',y:'2026',kind:'IoT system',brief:'A low-power sensor node that turns soil readings into a simple, actionable watering signal.',build:['Capacitive soil sensor','ESP32 telemetry node','MQTT message channel','Responsive monitoring view'],out:'A prototype for checking soil status without walking to every bed.',g:'',v:'plant'},
 {t:'Attendance by Face',p:'Roll calls eat ten minutes of every lecture.',s:['Python','OpenCV','Flask'],b:'Kabir, Isha',y:'2026',kind:'Computer vision',brief:'A privacy-conscious attendance prototype designed to reduce repetitive classroom roll calls.',build:['Face-detection pipeline','Local recognition flow','Flask review screen','Manual verification step'],out:'A working exploration of faster attendance with a human check in the loop.',g:'',v:'face'},
 {t:'Line-Following Cart',p:'Labs need a low-cost cart for logistics demos.',s:['Arduino','C++','PID'],b:'Riya, Dev',y:'2025',kind:'Robotics',brief:'A compact autonomous cart that follows a marked path and demonstrates closed-loop motor control.',build:['Infrared sensor array','PID steering logic','Arduino motor control','Modular chassis'],out:'A repeatable lab demonstration platform for motion-control experiments.',g:'',v:'cart'}];
const FM=[
{y:2026,ty:'Competition',t:'Second place, inter-college hackathon',d:'Team [names] built a working prototype in 24 hours.'},
{y:2026,ty:'Project',t:'Smart Plant Monitor wins campus innovation award',d:'Recognised by [faculty panel] for practical IoT use.'},
{y:2025,ty:'Alumni',t:'Alumnus joins an embedded firm as engineer',d:'[Name] credits club projects for the portfolio that got the interview.'},
{y:2025,ty:'Media',t:'Club featured in campus newsletter',d:'Coverage of the Robotics Showcase.'},
{y:2025,ty:'Competition',t:'Finalists, national robotics challenge',d:'Team [names] reached the final round.'}];
const PO=[
{t:'Your first ESP32 project, step by step',c:'Tutorial',au:'[Author]',dt:'12 Oct 2026',rt:'6 min',b:'Start with a blinking LED, then read a sensor, then send the value to a dashboard. Each step teaches one idea: pins, timing and networking. Build them in order and you will have a working IoT node by the end of the evening.'},
{t:'How we built the plant monitor',c:'Project story',au:'[Author]',dt:'28 Sep 2026',rt:'8 min',b:'We began with a simple question: who waters the hostel plants? From that, we chose a soil sensor, wrote a tiny MQTT client and learned the hard way why power budgets matter.'},
{t:'What edge ML really changes',c:'Research',au:'[Author]',dt:'3 Sep 2026',rt:'10 min',b:'Running models on small devices trades accuracy for latency and privacy. This piece compares three approaches and what each costs in memory and power.'},
{t:'Why I joined a club in first year',c:'Member writing',au:'[Author]',dt:'20 Aug 2026',rt:'4 min',b:'I joined to learn Python and stayed for the people. Here is what changed in my first semester.'}];
const Q=[
['What do you enjoy most?',['Understanding how things work','Making something with my hands','Winning under time pressure','Working with a team']],
['Pick a weekend plan.',['Watch a deep technical talk','Wire up a circuit','Enter a hackathon','Organise a study group']],
['Your current level?',['Just starting','Some projects done','Ready to compete','Happy to mentor']]];
const PATH=[['Learn','Start with Foundations Lab, then Industry Sessions.','#programs'],['Build','Join Build Sprint and ship a prototype.','#programs'],['Compete','Try the Hack Training Track and Hack Night.','#events'],['Collaborate','Join a team, mentor new members and help run events.','#join']];
const ST={open:['Registration open','f'],soon:['Opens soon','m'],closed:['Registration closed','s'],done:['Completed','m']};
