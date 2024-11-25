/******************** 
 * Vbt_B2_Day1 Test *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'vbt_B2_day1';  // from the Builder filename that created this script
let expInfo = {
    'ID': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-1.0,-1.0,-1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(informed_consent_1RoutineBegin());
flowScheduler.add(informed_consent_1RoutineEachFrame());
flowScheduler.add(informed_consent_1RoutineEnd());
flowScheduler.add(informed_consent_2RoutineBegin());
flowScheduler.add(informed_consent_2RoutineEachFrame());
flowScheduler.add(informed_consent_2RoutineEnd());
flowScheduler.add(training_instrRoutineBegin());
flowScheduler.add(training_instrRoutineEachFrame());
flowScheduler.add(training_instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(end_trainingRoutineBegin());
flowScheduler.add(end_trainingRoutineEachFrame());
flowScheduler.add(end_trainingRoutineEnd());
flowScheduler.add(test_instrRoutineBegin());
flowScheduler.add(test_instrRoutineEachFrame());
flowScheduler.add(test_instrRoutineEnd());
const test_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_loopLoopBegin(test_loopLoopScheduler));
flowScheduler.add(test_loopLoopScheduler);
flowScheduler.add(test_loopLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/cb_twijfel.png', 'path': 'images/cb_twijfel.png'},
    {'name': 'images/cb_q.png', 'path': 'images/cb_q.png'},
    {'name': 'images/cb_opslaan.png', 'path': 'images/cb_opslaan.png'},
    {'name': 'images/cb_tars.png', 'path': 'images/cb_tars.png'},
    {'name': 'images/cb_hemel.png', 'path': 'images/cb_hemel.png'},
    {'name': 'images/cb_i.png', 'path': 'images/cb_i.png'},
    {'name': 'images/cb_zuiplap.png', 'path': 'images/cb_zuiplap.png'},
    {'name': 'images/cb_bebrip.png', 'path': 'images/cb_bebrip.png'},
    {'name': 'images/cb_a.png', 'path': 'images/cb_a.png'},
    {'name': 'images/cb_mand.png', 'path': 'images/cb_mand.png'},
    {'name': 'images/cb_reedje.png', 'path': 'images/cb_reedje.png'},
    {'name': 'images/cb_r.png', 'path': 'images/cb_r.png'},
    {'name': 'images/cb_schuilen.png', 'path': 'images/cb_schuilen.png'},
    {'name': 'images/cb_wijze.png', 'path': 'images/cb_wijze.png'},
    {'name': 'images/cb_valop.png', 'path': 'images/cb_valop.png'},
    {'name': 'images/cb_n.png', 'path': 'images/cb_n.png'},
    {'name': 'images/cb_x.png', 'path': 'images/cb_x.png'},
    {'name': 'images/cb_j.png', 'path': 'images/cb_j.png'},
    {'name': 'images/cb_stuikem.png', 'path': 'images/cb_stuikem.png'},
    {'name': 'images/cb_b.png', 'path': 'images/cb_b.png'},
    {'name': 'images/cb_f.png', 'path': 'images/cb_f.png'},
    {'name': 'images/cb_d.png', 'path': 'images/cb_d.png'},
    {'name': 'images/cb_w.png', 'path': 'images/cb_w.png'},
    {'name': 'images/red_outline.jpg', 'path': 'images/red_outline.jpg'},
    {'name': 'images/cb_spanzing.png', 'path': 'images/cb_spanzing.png'},
    {'name': 'images/cb_hoog.png', 'path': 'images/cb_hoog.png'},
    {'name': 'images/cb_m.png', 'path': 'images/cb_m.png'},
    {'name': 'images/cb_meenemen.png', 'path': 'images/cb_meenemen.png'},
    {'name': 'images/cb_lochten.png', 'path': 'images/cb_lochten.png'},
    {'name': 'images/cb_schep.png', 'path': 'images/cb_schep.png'},
    {'name': 'images/cb_brijk.png', 'path': 'images/cb_brijk.png'},
    {'name': 'images/cb_dubbel.png', 'path': 'images/cb_dubbel.png'},
    {'name': 'images/cb_daarheen.png', 'path': 'images/cb_daarheen.png'},
    {'name': 'images/cb_jaar.png', 'path': 'images/cb_jaar.png'},
    {'name': 'images/ic_2.png', 'path': 'images/ic_2.png'},
    {'name': 'images/cb_klauw.png', 'path': 'images/cb_klauw.png'},
    {'name': 'images/cb_vizier.png', 'path': 'images/cb_vizier.png'},
    {'name': 'images/cb_o.png', 'path': 'images/cb_o.png'},
    {'name': 'images/cb_s.png', 'path': 'images/cb_s.png'},
    {'name': 'letters.csv', 'path': 'letters.csv'},
    {'name': 'images/cb_liegen.png', 'path': 'images/cb_liegen.png'},
    {'name': 'images/cb_lezen.png', 'path': 'images/cb_lezen.png'},
    {'name': 'images/cb_h.png', 'path': 'images/cb_h.png'},
    {'name': 'images/cb_muziek.png', 'path': 'images/cb_muziek.png'},
    {'name': 'images/cb_genond.png', 'path': 'images/cb_genond.png'},
    {'name': 'images/cb_lava.png', 'path': 'images/cb_lava.png'},
    {'name': 'images/cb_tekenen.png', 'path': 'images/cb_tekenen.png'},
    {'name': 'images/cb_schielen.png', 'path': 'images/cb_schielen.png'},
    {'name': 'images/cb_klimmen.png', 'path': 'images/cb_klimmen.png'},
    {'name': 'images/cb_rezer.png', 'path': 'images/cb_rezer.png'},
    {'name': 'images/cb_stamen.png', 'path': 'images/cb_stamen.png'},
    {'name': 'images/cb_p.png', 'path': 'images/cb_p.png'},
    {'name': 'images/cb_g.png', 'path': 'images/cb_g.png'},
    {'name': 'images/cb_c.png', 'path': 'images/cb_c.png'},
    {'name': 'images/cb_v.png', 'path': 'images/cb_v.png'},
    {'name': 'images/cb_u.png', 'path': 'images/cb_u.png'},
    {'name': 'images/cb_toezicht.png', 'path': 'images/cb_toezicht.png'},
    {'name': 'images/cb_stuk.png', 'path': 'images/cb_stuk.png'},
    {'name': 'images/ic_1.png', 'path': 'images/ic_1.png'},
    {'name': 'images/cb_fictie.png', 'path': 'images/cb_fictie.png'},
    {'name': 'images/cb_voorkeur.png', 'path': 'images/cb_voorkeur.png'},
    {'name': 'images/cb_k.png', 'path': 'images/cb_k.png'},
    {'name': 'images/cb_y.png', 'path': 'images/cb_y.png'},
    {'name': 'images/cb_bleek.png', 'path': 'images/cb_bleek.png'},
    {'name': 'images/cb_e.png', 'path': 'images/cb_e.png'},
    {'name': 'images/cb_hiervan.png', 'path': 'images/cb_hiervan.png'},
    {'name': 'images/cb_maken.png', 'path': 'images/cb_maken.png'},
    {'name': 'images/cb_loods.png', 'path': 'images/cb_loods.png'},
    {'name': 'images/cb_vervaden.png', 'path': 'images/cb_vervaden.png'},
    {'name': 'images/cb_prort.png', 'path': 'images/cb_prort.png'},
    {'name': 'images/cb_kanjer.png', 'path': 'images/cb_kanjer.png'},
    {'name': 'images/cb_waarvan.png', 'path': 'images/cb_waarvan.png'},
    {'name': 'images/cb_t.png', 'path': 'images/cb_t.png'},
    {'name': 'images/cb_knoe.png', 'path': 'images/cb_knoe.png'},
    {'name': 'images/cb_booi.png', 'path': 'images/cb_booi.png'},
    {'name': 'images/cb_z.png', 'path': 'images/cb_z.png'},
    {'name': 'test_d1.csv', 'path': 'test_d1.csv'},
    {'name': 'images/cb_vijftig.png', 'path': 'images/cb_vijftig.png'},
    {'name': 'images/cb_zaal.png', 'path': 'images/cb_zaal.png'},
    {'name': 'images/cb_voorreur.png', 'path': 'images/cb_voorreur.png'},
    {'name': 'images/cb_opplaan.png', 'path': 'images/cb_opplaan.png'},
    {'name': 'images/cb_attentie.png', 'path': 'images/cb_attentie.png'},
    {'name': 'images/cb_l.png', 'path': 'images/cb_l.png'},
    {'name': 'images/cb_uitdelen.png', 'path': 'images/cb_uitdelen.png'},
    {'name': 'images/cb_dred.png', 'path': 'images/cb_dred.png'},
    {'name': 'images/cb_opvatten.png', 'path': 'images/cb_opvatten.png'},
    {'name': 'images/cb_liefde.png', 'path': 'images/cb_liefde.png'},
    {'name': 'images/cb_flullen.png', 'path': 'images/cb_flullen.png'},
    {'name': 'images/cb_dief.png', 'path': 'images/cb_dief.png'},
    {'name': 'images/cb_mening.png', 'path': 'images/cb_mening.png'},
    {'name': 'images/cb_slak.png', 'path': 'images/cb_slak.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + ((("sub-" + expInfo["ID"]) + "_ses-001_task-training_script-CB_date-") + expInfo["date"]));

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://psykuleuven.sona-systems.com/webstudy_credit.aspx?experiment_id=1769&credit_token=0c000c8a374346aeb708e3effe61cf60&survey_code=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var welcome_mouse;
var informed_consent_1Clock;
var image;
var text;
var mouse_2;
var informed_consent_2Clock;
var image_2;
var mouse_3;
var text_2;
var training_instrClock;
var train_text;
var train_mouse;
var letter_trainingClock;
var outline;
var braille_letter;
var dutch_letter;
var braille_mouse;
var end_trainingClock;
var endTrain_text;
var mouse;
var test_instrClock;
var testInstr_text;
var testInstr_mouse;
var word_testClock;
var test_word;
var test_mouse;
var test_response;
var endClock;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Goeiedag,\n\nIn deze eerste sessie van het experiment leert u de letters van ons Nederlandse alfabet te associëren met de overeenkomstige tekens van een nieuwe taal.\n\nVoordat u begint, tonen de volgende twee schermen de geïnformeerde toestemming. Door met uw muis te klikken en door te gaan met het experiment, gaat u akkoord met de voorwaarden die in de geïnformeerde toestemming voor de volgende experimenten staan. \n\nAls u zich om welke reden dan ook wilt terugtrekken uit dit (en alle volgende) experiment(en), drukt u op "esc" om de pagina te verlaten. \n\nNa de geïnformeerde toestemming zullen we meer informatie geven over de taakdetails van deze eerste sessie. \n\nKlik op de muis om door te gaan naar de volgende pagina.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  welcome_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "informed_consent_1"
  informed_consent_1Clock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'images/ic_1.png', mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [1, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Klik om verder te gann',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "informed_consent_2"
  informed_consent_2Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'images/ic_2.png', mask : undefined,
    ori : 0.0, pos : [0, 0.1], size : [1, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Klik om de voorwaarden te accepteren of druk op "esc" om de pagina te verlaten',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "training_instr"
  training_instrClock = new util.Clock();
  train_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'train_text',
    text: 'Vandaag leren we de letter-voor-letter overeenkomst van het Nederlandse alfabet en het nieuwe alfabet. \n\nEerst wordt er geoefend: u ziet een letter van het nieuwe alfabet en even later de overeenkomstige letter van ons Nederlandse alfabet. Zorg ervoor dat u zich op elke letter concentreert. \nAls u klaar bent om naar de volgende letter te gaan, dan klikt u met de muis.\n\nU zult alle letters 7 keer zien, en dit in een willekeurige volgorde. \n\nNa de training vragen we u een korte pauze te nemen (5-10 minuten) en dan terug te komen voor de test; Tijdens de test krijgt u woorden te zien gevormd door de letters die u tijdens de training heeft geleerd. Van u wordt gevraagd om het woord om te zetten naar ons alfabet en om het op uw toetsenbord in te typen. \n\nLet dus goed op tijdens de training van de nieuwe karakters.\n\nWanneer u klaar bent om te beginnen, dan klikt u met de muis om de training te starten.  \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  train_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  train_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "letter_training"
  letter_trainingClock = new util.Clock();
  outline = new visual.ImageStim({
    win : psychoJS.window,
    name : 'outline', units : undefined, 
    image : 'images/red_outline.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.11, 0.158],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  braille_letter = new visual.ImageStim({
    win : psychoJS.window,
    name : 'braille_letter', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.1, 0.148],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 256.0, interpolate : true, depth : -1.0 
  });
  dutch_letter = new visual.TextStim({
    win: psychoJS.window,
    name: 'dutch_letter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  braille_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  braille_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "end_training"
  end_trainingClock = new util.Clock();
  endTrain_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'endTrain_text',
    text: 'De training is voorbij\n\nNeem een pauze van 5-10 minuten en laat ondertussen het beeldscherm staan op deze pagina. Kom terug voor de test wanneer u klaar bent.\n\nAls u dat gedaan heeft, klikt u met de muis om verder te gaan met de testinstructies.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "test_instr"
  test_instrClock = new util.Clock();
  testInstr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'testInstr_text',
    text: "We gaan nu een korte test doen om te zien hoe goed u deze woorden heeft geleerd. \n\nU krijgt 60 items voorgelegd. Sommige zijn woorden die u net hebt gezien, sommige zijn nieuw en sommige hebben geen betekenis (niet-woorden). \nNa 6 seconden verdwijnen de woorden en wordt u gevraagd om de overeenkomstige letterreeks (de vertaling) in te typen in het antwoordveld dat verschijnt. \nAls er een letter is die je niet meer weet, kun je die overslaan door de letter simpelweg te vervangen door een punt '.'\n\nProbeer zo nauwkeurig mogelijk te zijn.\n\nZodra uw antwoord is ingevoerd, klikt u met de muis om naar het volgende woord te gaan. \n\nAls u klaar bent voor de test, klik dan met de muis om te beginnen.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  testInstr_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  testInstr_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "word_test"
  word_testClock = new util.Clock();
  test_word = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_word', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.7, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  test_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  test_mouse.mouseClock = new util.Clock();
  test_response = new visual.TextBox({
    win: psychoJS.window,
    name: 'test_response',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.2)], letterHeight: 0.03,
    size: [0.5, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'De test is nu voorbij.\n\nEr komt geen nieuwe test :)\n\nDit betekent dat de oefening voorlopig voorbij is. Wacht tot het pop-up venster is gesloten voordat u de webpagina verlaat.\n\nTot over een paar dagen!\n\nDe test is nu voorbij.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the welcome_mouse
    // current position of the mouse:
    welcome_mouse.x = [];
    welcome_mouse.y = [];
    welcome_mouse.leftButton = [];
    welcome_mouse.midButton = [];
    welcome_mouse.rightButton = [];
    welcome_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_mouse);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    // *welcome_mouse* updates
    if (t >= 0.0 && welcome_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_mouse.tStart = t;  // (not accounting for frame time here)
      welcome_mouse.frameNStart = frameN;  // exact frame index
      
      welcome_mouse.status = PsychoJS.Status.STARTED;
      welcome_mouse.mouseClock.reset();
      prevButtonState = welcome_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (welcome_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = welcome_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = welcome_mouse.getPos();
          welcome_mouse.x.push(_mouseXYs[0]);
          welcome_mouse.y.push(_mouseXYs[1]);
          welcome_mouse.leftButton.push(_mouseButtons[0]);
          welcome_mouse.midButton.push(_mouseButtons[1]);
          welcome_mouse.rightButton.push(_mouseButtons[2]);
          welcome_mouse.time.push(welcome_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (welcome_mouse.x) {  psychoJS.experiment.addData('welcome_mouse.x', welcome_mouse.x[0])};
    if (welcome_mouse.y) {  psychoJS.experiment.addData('welcome_mouse.y', welcome_mouse.y[0])};
    if (welcome_mouse.leftButton) {  psychoJS.experiment.addData('welcome_mouse.leftButton', welcome_mouse.leftButton[0])};
    if (welcome_mouse.midButton) {  psychoJS.experiment.addData('welcome_mouse.midButton', welcome_mouse.midButton[0])};
    if (welcome_mouse.rightButton) {  psychoJS.experiment.addData('welcome_mouse.rightButton', welcome_mouse.rightButton[0])};
    if (welcome_mouse.time) {  psychoJS.experiment.addData('welcome_mouse.time', welcome_mouse.time[0])};
    
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var informed_consent_1Components;
function informed_consent_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'informed_consent_1' ---
    t = 0;
    informed_consent_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    informed_consent_1Components = [];
    informed_consent_1Components.push(image);
    informed_consent_1Components.push(text);
    informed_consent_1Components.push(mouse_2);
    
    for (const thisComponent of informed_consent_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function informed_consent_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'informed_consent_1' ---
    // get current time
    t = informed_consent_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of informed_consent_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function informed_consent_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'informed_consent_1' ---
    for (const thisComponent of informed_consent_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    
    // the Routine "informed_consent_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var informed_consent_2Components;
function informed_consent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'informed_consent_2' ---
    t = 0;
    informed_consent_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    informed_consent_2Components = [];
    informed_consent_2Components.push(image_2);
    informed_consent_2Components.push(mouse_3);
    informed_consent_2Components.push(text_2);
    
    for (const thisComponent of informed_consent_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function informed_consent_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'informed_consent_2' ---
    // get current time
    t = informed_consent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of informed_consent_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function informed_consent_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'informed_consent_2' ---
    for (const thisComponent of informed_consent_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    
    // the Routine "informed_consent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_instrComponents;
function training_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_instr' ---
    t = 0;
    training_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the train_mouse
    // current position of the mouse:
    train_mouse.x = [];
    train_mouse.y = [];
    train_mouse.leftButton = [];
    train_mouse.midButton = [];
    train_mouse.rightButton = [];
    train_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    training_instrComponents = [];
    training_instrComponents.push(train_text);
    training_instrComponents.push(train_mouse);
    
    for (const thisComponent of training_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function training_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_instr' ---
    // get current time
    t = training_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *train_text* updates
    if (t >= 0.0 && train_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_text.tStart = t;  // (not accounting for frame time here)
      train_text.frameNStart = frameN;  // exact frame index
      
      train_text.setAutoDraw(true);
    }

    // *train_mouse* updates
    if (t >= 0.0 && train_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_mouse.tStart = t;  // (not accounting for frame time here)
      train_mouse.frameNStart = frameN;  // exact frame index
      
      train_mouse.status = PsychoJS.Status.STARTED;
      train_mouse.mouseClock.reset();
      prevButtonState = train_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (train_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = train_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = train_mouse.getPos();
          train_mouse.x.push(_mouseXYs[0]);
          train_mouse.y.push(_mouseXYs[1]);
          train_mouse.leftButton.push(_mouseButtons[0]);
          train_mouse.midButton.push(_mouseButtons[1]);
          train_mouse.rightButton.push(_mouseButtons[2]);
          train_mouse.time.push(train_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_instr' ---
    for (const thisComponent of training_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (train_mouse.x) {  psychoJS.experiment.addData('train_mouse.x', train_mouse.x[0])};
    if (train_mouse.y) {  psychoJS.experiment.addData('train_mouse.y', train_mouse.y[0])};
    if (train_mouse.leftButton) {  psychoJS.experiment.addData('train_mouse.leftButton', train_mouse.leftButton[0])};
    if (train_mouse.midButton) {  psychoJS.experiment.addData('train_mouse.midButton', train_mouse.midButton[0])};
    if (train_mouse.rightButton) {  psychoJS.experiment.addData('train_mouse.rightButton', train_mouse.rightButton[0])};
    if (train_mouse.time) {  psychoJS.experiment.addData('train_mouse.time', train_mouse.time[0])};
    
    // the Routine "training_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 7, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'letters.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(letter_trainingRoutineBegin(snapshot));
      trialsLoopScheduler.add(letter_trainingRoutineEachFrame());
      trialsLoopScheduler.add(letter_trainingRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test_loop;
function test_loopLoopBegin(test_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'test_d1.csv',
      seed: undefined, name: 'test_loop'
    });
    psychoJS.experiment.addLoop(test_loop); // add the loop to the experiment
    currentLoop = test_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_loop of test_loop) {
      snapshot = test_loop.getSnapshot();
      test_loopLoopScheduler.add(importConditions(snapshot));
      test_loopLoopScheduler.add(word_testRoutineBegin(snapshot));
      test_loopLoopScheduler.add(word_testRoutineEachFrame());
      test_loopLoopScheduler.add(word_testRoutineEnd(snapshot));
      test_loopLoopScheduler.add(test_loopLoopEndIteration(test_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var letter_trainingComponents;
function letter_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter_training' ---
    t = 0;
    letter_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    braille_letter.setImage(cbLet);
    dutch_letter.setText(nlLet);
    // setup some python lists for storing info about the braille_mouse
    // current position of the mouse:
    braille_mouse.x = [];
    braille_mouse.y = [];
    braille_mouse.leftButton = [];
    braille_mouse.midButton = [];
    braille_mouse.rightButton = [];
    braille_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    letter_trainingComponents = [];
    letter_trainingComponents.push(outline);
    letter_trainingComponents.push(braille_letter);
    letter_trainingComponents.push(dutch_letter);
    letter_trainingComponents.push(braille_mouse);
    
    for (const thisComponent of letter_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter_training' ---
    // get current time
    t = letter_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *outline* updates
    if (t >= 0.0 && outline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outline.tStart = t;  // (not accounting for frame time here)
      outline.frameNStart = frameN;  // exact frame index
      
      outline.setAutoDraw(true);
    }

    
    // *braille_letter* updates
    if (t >= 0.0 && braille_letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      braille_letter.tStart = t;  // (not accounting for frame time here)
      braille_letter.frameNStart = frameN;  // exact frame index
      
      braille_letter.setAutoDraw(true);
    }

    
    // *dutch_letter* updates
    if (t >= 1.5 && dutch_letter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dutch_letter.tStart = t;  // (not accounting for frame time here)
      dutch_letter.frameNStart = frameN;  // exact frame index
      
      dutch_letter.setAutoDraw(true);
    }

    // *braille_mouse* updates
    if (t >= 3.0 && braille_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      braille_mouse.tStart = t;  // (not accounting for frame time here)
      braille_mouse.frameNStart = frameN;  // exact frame index
      
      braille_mouse.status = PsychoJS.Status.STARTED;
      braille_mouse.mouseClock.reset();
      prevButtonState = braille_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (braille_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = braille_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = braille_mouse.getPos();
          braille_mouse.x.push(_mouseXYs[0]);
          braille_mouse.y.push(_mouseXYs[1]);
          braille_mouse.leftButton.push(_mouseButtons[0]);
          braille_mouse.midButton.push(_mouseButtons[1]);
          braille_mouse.rightButton.push(_mouseButtons[2]);
          braille_mouse.time.push(braille_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter_trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter_training' ---
    for (const thisComponent of letter_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (braille_mouse.x) {  psychoJS.experiment.addData('braille_mouse.x', braille_mouse.x[0])};
    if (braille_mouse.y) {  psychoJS.experiment.addData('braille_mouse.y', braille_mouse.y[0])};
    if (braille_mouse.leftButton) {  psychoJS.experiment.addData('braille_mouse.leftButton', braille_mouse.leftButton[0])};
    if (braille_mouse.midButton) {  psychoJS.experiment.addData('braille_mouse.midButton', braille_mouse.midButton[0])};
    if (braille_mouse.rightButton) {  psychoJS.experiment.addData('braille_mouse.rightButton', braille_mouse.rightButton[0])};
    if (braille_mouse.time) {  psychoJS.experiment.addData('braille_mouse.time', braille_mouse.time[0])};
    
    // the Routine "letter_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_trainingComponents;
function end_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_training' ---
    t = 0;
    end_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    end_trainingComponents = [];
    end_trainingComponents.push(endTrain_text);
    end_trainingComponents.push(mouse);
    
    for (const thisComponent of end_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_training' ---
    // get current time
    t = end_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endTrain_text* updates
    if (t >= 0.0 && endTrain_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endTrain_text.tStart = t;  // (not accounting for frame time here)
      endTrain_text.frameNStart = frameN;  // exact frame index
      
      endTrain_text.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_training' ---
    for (const thisComponent of end_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    // the Routine "end_training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_instrComponents;
function test_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_instr' ---
    t = 0;
    test_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the testInstr_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    test_instrComponents = [];
    test_instrComponents.push(testInstr_text);
    test_instrComponents.push(testInstr_mouse);
    
    for (const thisComponent of test_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_instr' ---
    // get current time
    t = test_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *testInstr_text* updates
    if (t >= 0.0 && testInstr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testInstr_text.tStart = t;  // (not accounting for frame time here)
      testInstr_text.frameNStart = frameN;  // exact frame index
      
      testInstr_text.setAutoDraw(true);
    }

    // *testInstr_mouse* updates
    if (t >= 0.0 && testInstr_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testInstr_mouse.tStart = t;  // (not accounting for frame time here)
      testInstr_mouse.frameNStart = frameN;  // exact frame index
      
      testInstr_mouse.status = PsychoJS.Status.STARTED;
      testInstr_mouse.mouseClock.reset();
      prevButtonState = testInstr_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (testInstr_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = testInstr_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_instr' ---
    for (const thisComponent of test_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = testInstr_mouse.getPos();
    _mouseButtons = testInstr_mouse.getPressed();
    psychoJS.experiment.addData('testInstr_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('testInstr_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('testInstr_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('testInstr_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('testInstr_mouse.rightButton', _mouseButtons[2]);
    // the Routine "test_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var word_testComponents;
function word_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'word_test' ---
    t = 0;
    word_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    test_word.setImage(cbWrd);
    // setup some python lists for storing info about the test_mouse
    gotValidClick = false; // until a click is received
    test_response.setText('');
    test_response.refresh();
    // Run 'Begin Routine' code from test_code
    test_response.editable = true;
    test_response.refresh();
    
    // keep track of which components have finished
    word_testComponents = [];
    word_testComponents.push(test_word);
    word_testComponents.push(test_mouse);
    word_testComponents.push(test_response);
    
    for (const thisComponent of word_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function word_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'word_test' ---
    // get current time
    t = word_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_word* updates
    if (t >= 0 && test_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_word.tStart = t;  // (not accounting for frame time here)
      test_word.frameNStart = frameN;  // exact frame index
      
      test_word.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      test_word.setAutoDraw(false);
    }
    // *test_mouse* updates
    if (t >= 6 && test_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_mouse.tStart = t;  // (not accounting for frame time here)
      test_mouse.frameNStart = frameN;  // exact frame index
      
      test_mouse.status = PsychoJS.Status.STARTED;
      test_mouse.mouseClock.reset();
      prevButtonState = test_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (test_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = test_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *test_response* updates
    if (t >= 6 && test_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_response.tStart = t;  // (not accounting for frame time here)
      test_response.frameNStart = frameN;  // exact frame index
      
      test_response.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of word_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function word_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'word_test' ---
    for (const thisComponent of word_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = test_mouse.getPos();
    _mouseButtons = test_mouse.getPressed();
    psychoJS.experiment.addData('test_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('test_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('test_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('test_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('test_mouse.rightButton', _mouseButtons[2]);
    psychoJS.experiment.addData('test_response.text',test_response.text)
    // Run 'End Routine' code from test_code
    test_loop.addData("testResp", test_response._pixi.text);
    test_response.reset();
    
    // the Routine "word_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
