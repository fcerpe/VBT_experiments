﻿/******************** 
 * Vbt_B2_Day4 Test *
 ********************/


// store info about the experiment session:
let expName = 'vbt_B2_day4';  // from the Builder filename that created this script
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
flowScheduler.add(train_instrRoutineBegin());
flowScheduler.add(train_instrRoutineEachFrame());
flowScheduler.add(train_instrRoutineEnd());
const train_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(train_loopLoopBegin(train_loopLoopScheduler));
flowScheduler.add(train_loopLoopScheduler);
flowScheduler.add(train_loopLoopEnd);
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
    {'name': 'images/cb_schat.png', 'path': 'images/cb_schat.png'},
    {'name': 'images/cb_afval.png', 'path': 'images/cb_afval.png'},
    {'name': 'images/cb_baron.png', 'path': 'images/cb_baron.png'},
    {'name': 'images/cb_maling.png', 'path': 'images/cb_maling.png'},
    {'name': 'images/cb_dalen.png', 'path': 'images/cb_dalen.png'},
    {'name': 'images/cb_aandelen.png', 'path': 'images/cb_aandelen.png'},
    {'name': 'images/cb_midden.png', 'path': 'images/cb_midden.png'},
    {'name': 'images/cb_gezond.png', 'path': 'images/cb_gezond.png'},
    {'name': 'images/cb_stoom.png', 'path': 'images/cb_stoom.png'},
    {'name': 'images/cb_toeval.png', 'path': 'images/cb_toeval.png'},
    {'name': 'images/cb_loyaal.png', 'path': 'images/cb_loyaal.png'},
    {'name': 'images/cb_flippen.png', 'path': 'images/cb_flippen.png'},
    {'name': 'images/cb_baai.png', 'path': 'images/cb_baai.png'},
    {'name': 'images/cb_zwek.png', 'path': 'images/cb_zwek.png'},
    {'name': 'images/cb_pijnlijk.png', 'path': 'images/cb_pijnlijk.png'},
    {'name': 'images/cb_komisch.png', 'path': 'images/cb_komisch.png'},
    {'name': 'images/cb_boeien.png', 'path': 'images/cb_boeien.png'},
    {'name': 'images/cb_warel.png', 'path': 'images/cb_warel.png'},
    {'name': 'images/cb_haza.png', 'path': 'images/cb_haza.png'},
    {'name': 'images/cb_mand.png', 'path': 'images/cb_mand.png'},
    {'name': 'images/cb_knie.png', 'path': 'images/cb_knie.png'},
    {'name': 'images/cb_strekken.png', 'path': 'images/cb_strekken.png'},
    {'name': 'images/cb_broodje.png', 'path': 'images/cb_broodje.png'},
    {'name': 'images/cb_stal.png', 'path': 'images/cb_stal.png'},
    {'name': 'images/cb_aanzien.png', 'path': 'images/cb_aanzien.png'},
    {'name': 'images/cb_gerucht.png', 'path': 'images/cb_gerucht.png'},
    {'name': 'images/cb_leuk.png', 'path': 'images/cb_leuk.png'},
    {'name': 'images/cb_bever.png', 'path': 'images/cb_bever.png'},
    {'name': 'images/cb_seizoen.png', 'path': 'images/cb_seizoen.png'},
    {'name': 'images/cb_smullen.png', 'path': 'images/cb_smullen.png'},
    {'name': 'images/cb_ijdel.png', 'path': 'images/cb_ijdel.png'},
    {'name': 'images/cb_techniek.png', 'path': 'images/cb_techniek.png'},
    {'name': 'images/cb_schuilen.png', 'path': 'images/cb_schuilen.png'},
    {'name': 'images/cb_totaal.png', 'path': 'images/cb_totaal.png'},
    {'name': 'images/cb_verhaal.png', 'path': 'images/cb_verhaal.png'},
    {'name': 'images/cb_mist.png', 'path': 'images/cb_mist.png'},
    {'name': 'images/cb_wozing.png', 'path': 'images/cb_wozing.png'},
    {'name': 'images/cb_getucht.png', 'path': 'images/cb_getucht.png'},
    {'name': 'images/cb_woede.png', 'path': 'images/cb_woede.png'},
    {'name': 'images/cb_gedicht.png', 'path': 'images/cb_gedicht.png'},
    {'name': 'images/cb_opkicht.png', 'path': 'images/cb_opkicht.png'},
    {'name': 'images/cb_zwart.png', 'path': 'images/cb_zwart.png'},
    {'name': 'images/cb_vlek.png', 'path': 'images/cb_vlek.png'},
    {'name': 'images/cb_vinger.png', 'path': 'images/cb_vinger.png'},
    {'name': 'images/cb_vorm.png', 'path': 'images/cb_vorm.png'},
    {'name': 'images/cb_stiekem.png', 'path': 'images/cb_stiekem.png'},
    {'name': 'images/cb_oprotten.png', 'path': 'images/cb_oprotten.png'},
    {'name': 'images/cb_oceaan.png', 'path': 'images/cb_oceaan.png'},
    {'name': 'images/cb_zaalrijk.png', 'path': 'images/cb_zaalrijk.png'},
    {'name': 'images/cb_volop.png', 'path': 'images/cb_volop.png'},
    {'name': 'images/cb_slagen.png', 'path': 'images/cb_slagen.png'},
    {'name': 'images/cb_hechten.png', 'path': 'images/cb_hechten.png'},
    {'name': 'images/cb_bisschop.png', 'path': 'images/cb_bisschop.png'},
    {'name': 'images/cb_schatten.png', 'path': 'images/cb_schatten.png'},
    {'name': 'images/cb_parel.png', 'path': 'images/cb_parel.png'},
    {'name': 'images/cb_opruimen.png', 'path': 'images/cb_opruimen.png'},
    {'name': 'images/cb_wagon.png', 'path': 'images/cb_wagon.png'},
    {'name': 'images/cb_stemming.png', 'path': 'images/cb_stemming.png'},
    {'name': 'images/cb_opkijken.png', 'path': 'images/cb_opkijken.png'},
    {'name': 'images/cb_lever.png', 'path': 'images/cb_lever.png'},
    {'name': 'images/cb_moes.png', 'path': 'images/cb_moes.png'},
    {'name': 'images/cb_dozijn.png', 'path': 'images/cb_dozijn.png'},
    {'name': 'images/cb_gaaf.png', 'path': 'images/cb_gaaf.png'},
    {'name': 'images/cb_paalbaak.png', 'path': 'images/cb_paalbaak.png'},
    {'name': 'images/cb_schep.png', 'path': 'images/cb_schep.png'},
    {'name': 'images/cb_eerst.png', 'path': 'images/cb_eerst.png'},
    {'name': 'images/cb_gijf.png', 'path': 'images/cb_gijf.png'},
    {'name': 'images/cb_flirt.png', 'path': 'images/cb_flirt.png'},
    {'name': 'images/cb_dubbel.png', 'path': 'images/cb_dubbel.png'},
    {'name': 'images/cb_gebit.png', 'path': 'images/cb_gebit.png'},
    {'name': 'images/cb_mijn.png', 'path': 'images/cb_mijn.png'},
    {'name': 'images/cb_bisschap.png', 'path': 'images/cb_bisschap.png'},
    {'name': 'images/cb_eetlust.png', 'path': 'images/cb_eetlust.png'},
    {'name': 'images/cb_middelen.png', 'path': 'images/cb_middelen.png'},
    {'name': 'images/cb_knielen.png', 'path': 'images/cb_knielen.png'},
    {'name': 'images/cb_bijkomen.png', 'path': 'images/cb_bijkomen.png'},
    {'name': 'images/cb_feestdag.png', 'path': 'images/cb_feestdag.png'},
    {'name': 'images/cb_groen.png', 'path': 'images/cb_groen.png'},
    {'name': 'images/cb_goedkoop.png', 'path': 'images/cb_goedkoop.png'},
    {'name': 'images/cb_daarheen.png', 'path': 'images/cb_daarheen.png'},
    {'name': 'images/cb_vervoer.png', 'path': 'images/cb_vervoer.png'},
    {'name': 'images/cb_strak.png', 'path': 'images/cb_strak.png'},
    {'name': 'images/cb_anarchie.png', 'path': 'images/cb_anarchie.png'},
    {'name': 'images/cb_seizoon.png', 'path': 'images/cb_seizoon.png'},
    {'name': 'images/cb_keihard.png', 'path': 'images/cb_keihard.png'},
    {'name': 'images/cb_jaar.png', 'path': 'images/cb_jaar.png'},
    {'name': 'images/cb_drooien.png', 'path': 'images/cb_drooien.png'},
    {'name': 'images/cb_maaltijd.png', 'path': 'images/cb_maaltijd.png'},
    {'name': 'images/cb_beseffen.png', 'path': 'images/cb_beseffen.png'},
    {'name': 'images/cb_soda.png', 'path': 'images/cb_soda.png'},
    {'name': 'images/cb_aanzwaag.png', 'path': 'images/cb_aanzwaag.png'},
    {'name': 'images/cb_klauw.png', 'path': 'images/cb_klauw.png'},
    {'name': 'images/cb_hier.png', 'path': 'images/cb_hier.png'},
    {'name': 'images/cb_kabel.png', 'path': 'images/cb_kabel.png'},
    {'name': 'images/cb_palm.png', 'path': 'images/cb_palm.png'},
    {'name': 'images/cb_vullen.png', 'path': 'images/cb_vullen.png'},
    {'name': 'images/cb_openbaar.png', 'path': 'images/cb_openbaar.png'},
    {'name': 'images/cb_schenden.png', 'path': 'images/cb_schenden.png'},
    {'name': 'images/cb_leek.png', 'path': 'images/cb_leek.png'},
    {'name': 'images/cb_kaal.png', 'path': 'images/cb_kaal.png'},
    {'name': 'images/cb_lukken.png', 'path': 'images/cb_lukken.png'},
    {'name': 'images/cb_kleren.png', 'path': 'images/cb_kleren.png'},
    {'name': 'images/cb_ezel.png', 'path': 'images/cb_ezel.png'},
    {'name': 'images/cb_woning.png', 'path': 'images/cb_woning.png'},
    {'name': 'images/cb_pittig.png', 'path': 'images/cb_pittig.png'},
    {'name': 'images/cb_nodig.png', 'path': 'images/cb_nodig.png'},
    {'name': 'images/cb_invloed.png', 'path': 'images/cb_invloed.png'},
    {'name': 'images/cb_geld.png', 'path': 'images/cb_geld.png'},
    {'name': 'images/cb_spanning.png', 'path': 'images/cb_spanning.png'},
    {'name': 'images/cb_uien.png', 'path': 'images/cb_uien.png'},
    {'name': 'images/cb_steen.png', 'path': 'images/cb_steen.png'},
    {'name': 'images/cb_eenhoorn.png', 'path': 'images/cb_eenhoorn.png'},
    {'name': 'images/cb_praat.png', 'path': 'images/cb_praat.png'},
    {'name': 'images/cb_poes.png', 'path': 'images/cb_poes.png'},
    {'name': 'images/cb_zout.png', 'path': 'images/cb_zout.png'},
    {'name': 'images/cb_muziek.png', 'path': 'images/cb_muziek.png'},
    {'name': 'images/cb_aflopen.png', 'path': 'images/cb_aflopen.png'},
    {'name': 'images/cb_afnemen.png', 'path': 'images/cb_afnemen.png'},
    {'name': 'images/cb_geluid.png', 'path': 'images/cb_geluid.png'},
    {'name': 'images/cb_klimmen.png', 'path': 'images/cb_klimmen.png'},
    {'name': 'images/cb_getuigen.png', 'path': 'images/cb_getuigen.png'},
    {'name': 'images/cb_steek.png', 'path': 'images/cb_steek.png'},
    {'name': 'images/cb_mekst.png', 'path': 'images/cb_mekst.png'},
    {'name': 'images/cb_gegeven.png', 'path': 'images/cb_gegeven.png'},
    {'name': 'images/cb_wegen.png', 'path': 'images/cb_wegen.png'},
    {'name': 'images/cb_trekker.png', 'path': 'images/cb_trekker.png'},
    {'name': 'images/cb_legaal.png', 'path': 'images/cb_legaal.png'},
    {'name': 'images/cb_ziek.png', 'path': 'images/cb_ziek.png'},
    {'name': 'images/cb_bruin.png', 'path': 'images/cb_bruin.png'},
    {'name': 'images/cb_slapen.png', 'path': 'images/cb_slapen.png'},
    {'name': 'images/cb_laken.png', 'path': 'images/cb_laken.png'},
    {'name': 'images/cb_koppen.png', 'path': 'images/cb_koppen.png'},
    {'name': 'images/cb_liefje.png', 'path': 'images/cb_liefje.png'},
    {'name': 'images/cb_kring.png', 'path': 'images/cb_kring.png'},
    {'name': 'images/cb_toevol.png', 'path': 'images/cb_toevol.png'},
    {'name': 'images/cb_vuur.png', 'path': 'images/cb_vuur.png'},
    {'name': 'images/cb_toegeven.png', 'path': 'images/cb_toegeven.png'},
    {'name': 'images/cb_woestijn.png', 'path': 'images/cb_woestijn.png'},
    {'name': 'images/cb_plek.png', 'path': 'images/cb_plek.png'},
    {'name': 'images/cb_rechten.png', 'path': 'images/cb_rechten.png'},
    {'name': 'images/cb_tucket.png', 'path': 'images/cb_tucket.png'},
    {'name': 'images/cb_mode.png', 'path': 'images/cb_mode.png'},
    {'name': 'images/cb_mijnheer.png', 'path': 'images/cb_mijnheer.png'},
    {'name': 'images/cb_waarop.png', 'path': 'images/cb_waarop.png'},
    {'name': 'images/cb_zingen.png', 'path': 'images/cb_zingen.png'},
    {'name': 'images/cb_kennis.png', 'path': 'images/cb_kennis.png'},
    {'name': 'images/cb_rijp.png', 'path': 'images/cb_rijp.png'},
    {'name': 'images/cb_gaan.png', 'path': 'images/cb_gaan.png'},
    {'name': 'images/cb_zuster.png', 'path': 'images/cb_zuster.png'},
    {'name': 'images/cb_site.png', 'path': 'images/cb_site.png'},
    {'name': 'images/cb_zweven.png', 'path': 'images/cb_zweven.png'},
    {'name': 'images/cb_blik.png', 'path': 'images/cb_blik.png'},
    {'name': 'images/cb_bleek.png', 'path': 'images/cb_bleek.png'},
    {'name': 'images/cb_opzicht.png', 'path': 'images/cb_opzicht.png'},
    {'name': 'images/cb_grappen.png', 'path': 'images/cb_grappen.png'},
    {'name': 'images/cb_opkomen.png', 'path': 'images/cb_opkomen.png'},
    {'name': 'images/cb_hiervan.png', 'path': 'images/cb_hiervan.png'},
    {'name': 'images/cb_blad.png', 'path': 'images/cb_blad.png'},
    {'name': 'images/cb_heengaan.png', 'path': 'images/cb_heengaan.png'},
    {'name': 'images/cb_strikken.png', 'path': 'images/cb_strikken.png'},
    {'name': 'images/cb_snoep.png', 'path': 'images/cb_snoep.png'},
    {'name': 'images/cb_leren.png', 'path': 'images/cb_leren.png'},
    {'name': 'images/cb_heilig.png', 'path': 'images/cb_heilig.png'},
    {'name': 'images/cb_gebog.png', 'path': 'images/cb_gebog.png'},
    {'name': 'images/cb_bedoelen.png', 'path': 'images/cb_bedoelen.png'},
    {'name': 'images/cb_diep.png', 'path': 'images/cb_diep.png'},
    {'name': 'images/cb_knaap.png', 'path': 'images/cb_knaap.png'},
    {'name': 'images/cb_maken.png', 'path': 'images/cb_maken.png'},
    {'name': 'images/cb_nakijken.png', 'path': 'images/cb_nakijken.png'},
    {'name': 'images/cb_samen.png', 'path': 'images/cb_samen.png'},
    {'name': 'images/cb_drummer.png', 'path': 'images/cb_drummer.png'},
    {'name': 'images/cb_flits.png', 'path': 'images/cb_flits.png'},
    {'name': 'images/cb_blijven.png', 'path': 'images/cb_blijven.png'},
    {'name': 'images/cb_kanjer.png', 'path': 'images/cb_kanjer.png'},
    {'name': 'images/cb_waarvan.png', 'path': 'images/cb_waarvan.png'},
    {'name': 'images/cb_innemen.png', 'path': 'images/cb_innemen.png'},
    {'name': 'images/cb_geduld.png', 'path': 'images/cb_geduld.png'},
    {'name': 'images/cb_weigeren.png', 'path': 'images/cb_weigeren.png'},
    {'name': 'images/cb_strok.png', 'path': 'images/cb_strok.png'},
    {'name': 'images/cb_dans.png', 'path': 'images/cb_dans.png'},
    {'name': 'images/cb_kasteel.png', 'path': 'images/cb_kasteel.png'},
    {'name': 'images/cb_vreten.png', 'path': 'images/cb_vreten.png'},
    {'name': 'images/cb_aarzelen.png', 'path': 'images/cb_aarzelen.png'},
    {'name': 'test_d4.csv', 'path': 'test_d4.csv'},
    {'name': 'images/cb_excuus.png', 'path': 'images/cb_excuus.png'},
    {'name': 'images/cb_opheffen.png', 'path': 'images/cb_opheffen.png'},
    {'name': 'images/cb_geit.png', 'path': 'images/cb_geit.png'},
    {'name': 'images/cb_schaamte.png', 'path': 'images/cb_schaamte.png'},
    {'name': 'images/cb_huisdier.png', 'path': 'images/cb_huisdier.png'},
    {'name': 'images/cb_akkoord.png', 'path': 'images/cb_akkoord.png'},
    {'name': 'images/cb_piste.png', 'path': 'images/cb_piste.png'},
    {'name': 'images/cb_prikken.png', 'path': 'images/cb_prikken.png'},
    {'name': 'images/cb_schotel.png', 'path': 'images/cb_schotel.png'},
    {'name': 'images/cb_taal.png', 'path': 'images/cb_taal.png'},
    {'name': 'images/cb_waken.png', 'path': 'images/cb_waken.png'},
    {'name': 'images/cb_jasje.png', 'path': 'images/cb_jasje.png'},
    {'name': 'images/cb_lokken.png', 'path': 'images/cb_lokken.png'},
    {'name': 'images/cb_baas.png', 'path': 'images/cb_baas.png'},
    {'name': 'images/cb_besmet.png', 'path': 'images/cb_besmet.png'},
    {'name': 'images/cb_zaal.png', 'path': 'images/cb_zaal.png'},
    {'name': 'images/cb_sufferd.png', 'path': 'images/cb_sufferd.png'},
    {'name': 'images/cb_bloeien.png', 'path': 'images/cb_bloeien.png'},
    {'name': 'images/cb_kreeft.png', 'path': 'images/cb_kreeft.png'},
    {'name': 'images/cb_geliefd.png', 'path': 'images/cb_geliefd.png'},
    {'name': 'images/cb_snee.png', 'path': 'images/cb_snee.png'},
    {'name': 'images/cb_attentie.png', 'path': 'images/cb_attentie.png'},
    {'name': 'images/cb_weeshuis.png', 'path': 'images/cb_weeshuis.png'},
    {'name': 'images/cb_jurk.png', 'path': 'images/cb_jurk.png'},
    {'name': 'images/cb_tekst.png', 'path': 'images/cb_tekst.png'},
    {'name': 'images/cb_traag.png', 'path': 'images/cb_traag.png'},
    {'name': 'images/cb_redding.png', 'path': 'images/cb_redding.png'},
    {'name': 'images/cb_lappen.png', 'path': 'images/cb_lappen.png'},
    {'name': 'images/cb_joggen.png', 'path': 'images/cb_joggen.png'},
    {'name': 'images/cb_kust.png', 'path': 'images/cb_kust.png'},
    {'name': 'images/cb_noodzaak.png', 'path': 'images/cb_noodzaak.png'},
    {'name': 'images/cb_uitdelen.png', 'path': 'images/cb_uitdelen.png'},
    {'name': 'images/cb_uitlaat.png', 'path': 'images/cb_uitlaat.png'},
    {'name': 'training_d4.csv', 'path': 'training_d4.csv'},
    {'name': 'images/cb_koffie.png', 'path': 'images/cb_koffie.png'},
    {'name': 'images/cb_apparaat.png', 'path': 'images/cb_apparaat.png'},
    {'name': 'images/cb_stof.png', 'path': 'images/cb_stof.png'},
    {'name': 'images/cb_wijlen.png', 'path': 'images/cb_wijlen.png'},
    {'name': 'images/cb_staren.png', 'path': 'images/cb_staren.png'},
    {'name': 'images/cb_graaf.png', 'path': 'images/cb_graaf.png'},
    {'name': 'images/cb_sulbon.png', 'path': 'images/cb_sulbon.png'},
    {'name': 'images/cb_aanzoek.png', 'path': 'images/cb_aanzoek.png'},
    {'name': 'images/cb_ticket.png', 'path': 'images/cb_ticket.png'},
    {'name': 'images/cb_driemaal.png', 'path': 'images/cb_driemaal.png'},
    {'name': 'images/cb_aanraden.png', 'path': 'images/cb_aanraden.png'},
    {'name': 'images/cb_fran.png', 'path': 'images/cb_fran.png'},
    {'name': 'images/cb_waarbij.png', 'path': 'images/cb_waarbij.png'},
    {'name': 'images/cb_steel.png', 'path': 'images/cb_steel.png'},
    {'name': 'images/cb_snuiven.png', 'path': 'images/cb_snuiven.png'},
    {'name': 'images/cb_geheim.png', 'path': 'images/cb_geheim.png'},
    {'name': 'images/cb_laag.png', 'path': 'images/cb_laag.png'},
    {'name': 'images/cb_jagen.png', 'path': 'images/cb_jagen.png'},
    {'name': 'images/cb_doodmoe.png', 'path': 'images/cb_doodmoe.png'},
    {'name': 'images/cb_mening.png', 'path': 'images/cb_mening.png'},
    {'name': 'images/cb_voorraad.png', 'path': 'images/cb_voorraad.png'},
    {'name': 'images/cb_slak.png', 'path': 'images/cb_slak.png'},
    {'name': 'images/cb_lust.png', 'path': 'images/cb_lust.png'}
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

  psychoJS.experiment.dataFileName = (("." + "/") + ((("sub-" + expInfo["ID"]) + "_ses-004_task-training_script-CB_date-") + expInfo["date"]));

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://psykuleuven.sona-systems.com/webstudy_credit.aspx?experiment_id=1772&credit_token=81c0be688d17433a84d3edf95c0b4527&survey_code=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var welcome_mouse;
var train_instrClock;
var trainInstr_text;
var trainInstr_mouse;
var word_trainingClock;
var braille_word;
var dutch_word;
var translation_key;
var word_rsp;
var trWrd_mouse;
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
    text: 'Goeiedag en welkom!\n\nVandaag gaan we ons opnieuw concentreren op het leren van woorden. Net als in de vorige sessies zal er een gedeelte zijn waarin we bepaalde woorden oefenen, en daarna een test om te zien hoe goed u het doet. \n\nKlik met de muis om verder te gaan met de instructies.\n',
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
  // Initialize components for Routine "train_instr"
  train_instrClock = new util.Clock();
  trainInstr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trainInstr_text',
    text: 'Ter herinnering: u krijgt een woord in het nieuwe alfabet voorgeschoteld. We vragen u om het in stilte te lezen en het te proberen decoderen in Nederlandse letters. Wanneer u dit heeft gedaan, drukt u op de “pijl omlaag” op uw toetsenbord om de oplossing te zien. Daarna klikt u met de muis om verder te gaan naar het volgende woord. \n\nSoms ziet u een witte balk en wordt u gevraagd het antwoord te typen in plaats van het te decoderen in uw hoofd. De opdracht is dezelfde: druk op de onderste pijl op uw toetsenbord om de oplossing te controleren. Klik daarna met de muis om verder te gaan. \n\nNa de training volgt nog een korte test, dus let goed op de woorden. \n\nKlik met de muis om te starten met het leren van de woorden, en om door te gaan naar het volgende woord.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  trainInstr_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trainInstr_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "word_training"
  word_trainingClock = new util.Clock();
  braille_word = new visual.ImageStim({
    win : psychoJS.window,
    name : 'braille_word', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.7, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  dutch_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'dutch_word',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  translation_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  word_rsp = new visual.TextBox({
    win: psychoJS.window,
    name: 'word_rsp',
    text: '',
    font: 'Arial',
    pos: [0, (- 0.3)], letterHeight: 0.05,
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
    depth: -4.0 
  });
  
  trWrd_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trWrd_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "end_training"
  end_trainingClock = new util.Clock();
  endTrain_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'endTrain_text',
    text: 'De training is voorbij.\n\nNeem een pauze van 5-10 minuten en laat ondertussen het beeldscherm staan op deze pagina. Kom terug voor de test wanneer u klaar bent.\n\nAls u dat gedaan heeft, klikt u met de muis om verder te gaan met de testinstructies.\n',
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
    text: "We gaan nu een korte test doen om te zien hoe goed u de eerder geleerde woorden kunt decoderen. \n\nU krijgt 60 items voorgelegd. Sommige zijn woorden die u net hebt gezien, sommige zijn nieuw en sommige hebben geen betekenis (niet-woorden). \nNa 6 seconden verdwijnen de woorden en wordt u gevraagd om de overeenkomstige letterreeks (de vertaling) in te typen in het antwoordveld dat verschijnt. \nAls er een letter is die je niet meer weet, kun je die overslaan door de letter simpelweg te vervangen door een punt '.'\n\nProbeer zoals altijd zo snel en nauwkeurig mogelijk te zijn.\n\nZodra uw antwoord is ingevoerd, klikt u met de muis om naar het volgende woord te gaan. \n\nAls u klaar bent voor de test, klik dan met de muis om te beginnen.\n",
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
    text: 'De test is nu voorbij.\n\nDit was onze laatste training.\n\nHartelijk dank voor uw deelname en interesse in dit onderzoek.\n\nU kunt de onderzoekers laten weten dat u klaar bent met de training.\n\nWacht tot het pop-up venster sluit voordat u de webpagina verlaat.\n\nVerder nog een fijne dag gewenst :)\n',
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
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_mouse);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
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
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = welcome_mouse.getPos();
    _mouseButtons = welcome_mouse.getPressed();
    psychoJS.experiment.addData('welcome_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('welcome_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('welcome_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('welcome_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('welcome_mouse.rightButton', _mouseButtons[2]);
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_instrComponents;
function train_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_instr' ---
    t = 0;
    train_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the trainInstr_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    train_instrComponents = [];
    train_instrComponents.push(trainInstr_text);
    train_instrComponents.push(trainInstr_mouse);
    
    train_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function train_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_instr' ---
    // get current time
    t = train_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trainInstr_text* updates
    if (t >= 0.0 && trainInstr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainInstr_text.tStart = t;  // (not accounting for frame time here)
      trainInstr_text.frameNStart = frameN;  // exact frame index
      
      trainInstr_text.setAutoDraw(true);
    }

    // *trainInstr_mouse* updates
    if (t >= 0.0 && trainInstr_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainInstr_mouse.tStart = t;  // (not accounting for frame time here)
      trainInstr_mouse.frameNStart = frameN;  // exact frame index
      
      trainInstr_mouse.status = PsychoJS.Status.STARTED;
      trainInstr_mouse.mouseClock.reset();
      prevButtonState = trainInstr_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trainInstr_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trainInstr_mouse.getPressed();
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
    train_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function train_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_instr' ---
    train_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = trainInstr_mouse.getPos();
    _mouseButtons = trainInstr_mouse.getPressed();
    psychoJS.experiment.addData('trainInstr_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('trainInstr_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('trainInstr_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('trainInstr_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('trainInstr_mouse.rightButton', _mouseButtons[2]);
    // the Routine "train_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_loop;
function train_loopLoopBegin(train_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    train_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'training_d4.csv',
      seed: undefined, name: 'train_loop'
    });
    psychoJS.experiment.addLoop(train_loop); // add the loop to the experiment
    currentLoop = train_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    train_loop.forEach(function() {
      snapshot = train_loop.getSnapshot();
    
      train_loopLoopScheduler.add(importConditions(snapshot));
      train_loopLoopScheduler.add(word_trainingRoutineBegin(snapshot));
      train_loopLoopScheduler.add(word_trainingRoutineEachFrame());
      train_loopLoopScheduler.add(word_trainingRoutineEnd(snapshot));
      train_loopLoopScheduler.add(train_loopLoopEndIteration(train_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function train_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(train_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function train_loopLoopEndIteration(scheduler, snapshot) {
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
      trialList: 'test_d4.csv',
      seed: undefined, name: 'test_loop'
    });
    psychoJS.experiment.addLoop(test_loop); // add the loop to the experiment
    currentLoop = test_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    test_loop.forEach(function() {
      snapshot = test_loop.getSnapshot();
    
      test_loopLoopScheduler.add(importConditions(snapshot));
      test_loopLoopScheduler.add(word_testRoutineBegin(snapshot));
      test_loopLoopScheduler.add(word_testRoutineEachFrame());
      test_loopLoopScheduler.add(word_testRoutineEnd(snapshot));
      test_loopLoopScheduler.add(test_loopLoopEndIteration(test_loopLoopScheduler, snapshot));
    });
    
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


var _translation_key_allKeys;
var word_trainingComponents;
function word_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'word_training' ---
    t = 0;
    word_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    braille_word.setImage(cbWrd);
    dutch_word.setText(nlWrd);
    translation_key.keys = undefined;
    translation_key.rt = undefined;
    _translation_key_allKeys = [];
    // Run 'Begin Routine' code from word_code
    if ((test === 1)) {
        word_rsp.editable = true;
        word_rsp.refresh();
        word_rsp.setAutoDraw(true);
    }
    console.log(test);
    
    word_rsp.setText('');
    word_rsp.refresh();
    word_rsp.setText('');
    // setup some python lists for storing info about the trWrd_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    word_trainingComponents = [];
    word_trainingComponents.push(braille_word);
    word_trainingComponents.push(dutch_word);
    word_trainingComponents.push(translation_key);
    word_trainingComponents.push(word_rsp);
    word_trainingComponents.push(trWrd_mouse);
    
    word_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function word_trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'word_training' ---
    // get current time
    t = word_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *braille_word* updates
    if (t >= 0.5 && braille_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      braille_word.tStart = t;  // (not accounting for frame time here)
      braille_word.frameNStart = frameN;  // exact frame index
      
      braille_word.setAutoDraw(true);
    }

    
    // *dutch_word* updates
    if (((translation_key.keys == 'down')) && dutch_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dutch_word.tStart = t;  // (not accounting for frame time here)
      dutch_word.frameNStart = frameN;  // exact frame index
      
      dutch_word.setAutoDraw(true);
    }

    
    // *translation_key* updates
    if (t >= 4 && translation_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      translation_key.tStart = t;  // (not accounting for frame time here)
      translation_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { translation_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { translation_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { translation_key.clearEvents(); });
    }

    if (translation_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = translation_key.getKeys({keyList: ['down'], waitRelease: false});
      _translation_key_allKeys = _translation_key_allKeys.concat(theseKeys);
      if (_translation_key_allKeys.length > 0) {
        translation_key.keys = _translation_key_allKeys[_translation_key_allKeys.length - 1].name;  // just the last key pressed
        translation_key.rt = _translation_key_allKeys[_translation_key_allKeys.length - 1].rt;
        // was this correct?
        if (translation_key.keys == "'t'") {
            translation_key.corr = 1;
        } else {
            translation_key.corr = 0;
        }
      }
    }
    
    
    // *word_rsp* updates
    if (((test == 1)) && word_rsp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_rsp.tStart = t;  // (not accounting for frame time here)
      word_rsp.frameNStart = frameN;  // exact frame index
      
      word_rsp.setAutoDraw(true);
    }

    // *trWrd_mouse* updates
    if (((translation_key.keys == 'down')) && trWrd_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trWrd_mouse.tStart = t;  // (not accounting for frame time here)
      trWrd_mouse.frameNStart = frameN;  // exact frame index
      
      trWrd_mouse.status = PsychoJS.Status.STARTED;
      trWrd_mouse.mouseClock.reset();
      prevButtonState = trWrd_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trWrd_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trWrd_mouse.getPressed();
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
    word_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function word_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'word_training' ---
    word_trainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (translation_key.keys === undefined) {
      if (['None','none',undefined].includes("'t'")) {
         translation_key.corr = 1;  // correct non-response
      } else {
         translation_key.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(translation_key.corr, level);
    }
    psychoJS.experiment.addData('translation_key.keys', translation_key.keys);
    psychoJS.experiment.addData('translation_key.corr', translation_key.corr);
    if (typeof translation_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('translation_key.rt', translation_key.rt);
        }
    
    translation_key.stop();
    // Run 'End Routine' code from word_code
    if ((test === 1)) {
        train_loop.addData("testResp", word_rsp._pixi.text);
        word_rsp.reset();
    }
    
    psychoJS.experiment.addData('word_rsp.text',word_rsp.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = trWrd_mouse.getPos();
    _mouseButtons = trWrd_mouse.getPressed();
    psychoJS.experiment.addData('trWrd_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('trWrd_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('trWrd_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('trWrd_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('trWrd_mouse.rightButton', _mouseButtons[2]);
    // the Routine "word_training" was not non-slip safe, so reset the non-slip timer
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
    
    end_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    end_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    end_trainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    test_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    test_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    test_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    // Run 'Begin Routine' code from code
    test_response.editable = true;
    test_response.refresh();
    
    // keep track of which components have finished
    word_testComponents = [];
    word_testComponents.push(test_word);
    word_testComponents.push(test_mouse);
    word_testComponents.push(test_response);
    
    word_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    word_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    word_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = test_mouse.getPos();
    _mouseButtons = test_mouse.getPressed();
    psychoJS.experiment.addData('test_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('test_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('test_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('test_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('test_mouse.rightButton', _mouseButtons[2]);
    psychoJS.experiment.addData('test_response.text',test_response.text)
    // Run 'End Routine' code from code
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
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
