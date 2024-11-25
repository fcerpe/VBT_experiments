/******************** 
 * Vbt_B1_Day3 Test *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'vbt_B1_day3';  // from the Builder filename that created this script
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
    {'name': 'images/br_legaal.png', 'path': 'images/br_legaal.png'},
    {'name': 'images/br_kabel.png', 'path': 'images/br_kabel.png'},
    {'name': 'images/br_woestijn.png', 'path': 'images/br_woestijn.png'},
    {'name': 'images/br_piste.png', 'path': 'images/br_piste.png'},
    {'name': 'images/br_geliefd.png', 'path': 'images/br_geliefd.png'},
    {'name': 'images/br_poes.png', 'path': 'images/br_poes.png'},
    {'name': 'images/br_soda.png', 'path': 'images/br_soda.png'},
    {'name': 'images/br_toeval.png', 'path': 'images/br_toeval.png'},
    {'name': 'images/br_ticket.png', 'path': 'images/br_ticket.png'},
    {'name': 'images/br_vreten.png', 'path': 'images/br_vreten.png'},
    {'name': 'images/br_techniek.png', 'path': 'images/br_techniek.png'},
    {'name': 'images/br_kennis.png', 'path': 'images/br_kennis.png'},
    {'name': 'images/br_sluier.png', 'path': 'images/br_sluier.png'},
    {'name': 'images/br_schep.png', 'path': 'images/br_schep.png'},
    {'name': 'images/br_knie.png', 'path': 'images/br_knie.png'},
    {'name': 'images/br_jurk.png', 'path': 'images/br_jurk.png'},
    {'name': 'images/br_palm.png', 'path': 'images/br_palm.png'},
    {'name': 'images/br_daarheen.png', 'path': 'images/br_daarheen.png'},
    {'name': 'images/br_blad.png', 'path': 'images/br_blad.png'},
    {'name': 'images/br_klimmen.png', 'path': 'images/br_klimmen.png'},
    {'name': 'images/br_paken.png', 'path': 'images/br_paken.png'},
    {'name': 'images/br_groen.png', 'path': 'images/br_groen.png'},
    {'name': 'images/br_weigeren.png', 'path': 'images/br_weigeren.png'},
    {'name': 'images/br_seizoen.png', 'path': 'images/br_seizoen.png'},
    {'name': 'images/br_begrip.png', 'path': 'images/br_begrip.png'},
    {'name': 'images/br_vorm.png', 'path': 'images/br_vorm.png'},
    {'name': 'images/br_kanjer.png', 'path': 'images/br_kanjer.png'},
    {'name': 'images/br_bijkomen.png', 'path': 'images/br_bijkomen.png'},
    {'name': 'images/br_leuk.png', 'path': 'images/br_leuk.png'},
    {'name': 'images/br_plek.png', 'path': 'images/br_plek.png'},
    {'name': 'images/br_graaf.png', 'path': 'images/br_graaf.png'},
    {'name': 'images/br_leugeren.png', 'path': 'images/br_leugeren.png'},
    {'name': 'images/br_zingen.png', 'path': 'images/br_zingen.png'},
    {'name': 'images/br_geduld.png', 'path': 'images/br_geduld.png'},
    {'name': 'images/br_sufferd.png', 'path': 'images/br_sufferd.png'},
    {'name': 'images/br_eenhoorn.png', 'path': 'images/br_eenhoorn.png'},
    {'name': 'images/br_stoom.png', 'path': 'images/br_stoom.png'},
    {'name': 'images/br_vinger.png', 'path': 'images/br_vinger.png'},
    {'name': 'images/br_diep.png', 'path': 'images/br_diep.png'},
    {'name': 'images/br_besmet.png', 'path': 'images/br_besmet.png'},
    {'name': 'images/br_steel.png', 'path': 'images/br_steel.png'},
    {'name': 'images/br_bever.png', 'path': 'images/br_bever.png'},
    {'name': 'images/br_schatten.png', 'path': 'images/br_schatten.png'},
    {'name': 'images/br_staren.png', 'path': 'images/br_staren.png'},
    {'name': 'images/br_geld.png', 'path': 'images/br_geld.png'},
    {'name': 'images/br_leren.png', 'path': 'images/br_leren.png'},
    {'name': 'images/br_schat.png', 'path': 'images/br_schat.png'},
    {'name': 'images/br_slagen.png', 'path': 'images/br_slagen.png'},
    {'name': 'images/br_innemen.png', 'path': 'images/br_innemen.png'},
    {'name': 'test_d3.csv', 'path': 'test_d3.csv'},
    {'name': 'images/br_ijdel.png', 'path': 'images/br_ijdel.png'},
    {'name': 'images/br_wijlen.png', 'path': 'images/br_wijlen.png'},
    {'name': 'images/br_waarbij.png', 'path': 'images/br_waarbij.png'},
    {'name': 'images/br_kwaas.png', 'path': 'images/br_kwaas.png'},
    {'name': 'images/br_bleek.png', 'path': 'images/br_bleek.png'},
    {'name': 'images/br_lokken.png', 'path': 'images/br_lokken.png'},
    {'name': 'images/br_sultan.png', 'path': 'images/br_sultan.png'},
    {'name': 'images/br_stemming.png', 'path': 'images/br_stemming.png'},
    {'name': 'images/br_stikken.png', 'path': 'images/br_stikken.png'},
    {'name': 'images/br_kleren.png', 'path': 'images/br_kleren.png'},
    {'name': 'images/br_kaas.png', 'path': 'images/br_kaas.png'},
    {'name': 'images/br_geluid.png', 'path': 'images/br_geluid.png'},
    {'name': 'images/br_totaal.png', 'path': 'images/br_totaal.png'},
    {'name': 'images/br_hiervan.png', 'path': 'images/br_hiervan.png'},
    {'name': 'images/br_dubbel.png', 'path': 'images/br_dubbel.png'},
    {'name': 'images/br_opkomen.png', 'path': 'images/br_opkomen.png'},
    {'name': 'images/br_brappen.png', 'path': 'images/br_brappen.png'},
    {'name': 'images/br_trekker.png', 'path': 'images/br_trekker.png'},
    {'name': 'images/br_samen.png', 'path': 'images/br_samen.png'},
    {'name': 'images/br_kasteel.png', 'path': 'images/br_kasteel.png'},
    {'name': 'images/br_spanning.png', 'path': 'images/br_spanning.png'},
    {'name': 'images/br_mening.png', 'path': 'images/br_mening.png'},
    {'name': 'images/br_opkijken.png', 'path': 'images/br_opkijken.png'},
    {'name': 'images/br_zaal.png', 'path': 'images/br_zaal.png'},
    {'name': 'images/br_kust.png', 'path': 'images/br_kust.png'},
    {'name': 'images/br_aanzien.png', 'path': 'images/br_aanzien.png'},
    {'name': 'images/br_blijven.png', 'path': 'images/br_blijven.png'},
    {'name': 'images/br_uitlaat.png', 'path': 'images/br_uitlaat.png'},
    {'name': 'images/br_knielen.png', 'path': 'images/br_knielen.png'},
    {'name': 'images/br_mijnheer.png', 'path': 'images/br_mijnheer.png'},
    {'name': 'images/br_lust.png', 'path': 'images/br_lust.png'},
    {'name': 'images/br_alsof.png', 'path': 'images/br_alsof.png'},
    {'name': 'images/br_jaar.png', 'path': 'images/br_jaar.png'},
    {'name': 'images/br_opzicht.png', 'path': 'images/br_opzicht.png'},
    {'name': 'images/br_bisschop.png', 'path': 'images/br_bisschop.png'},
    {'name': 'images/br_keihard.png', 'path': 'images/br_keihard.png'},
    {'name': 'images/br_vullen.png', 'path': 'images/br_vullen.png'},
    {'name': 'images/br_beseffen.png', 'path': 'images/br_beseffen.png'},
    {'name': 'images/br_leemaken.png', 'path': 'images/br_leemaken.png'},
    {'name': 'images/br_zwart.png', 'path': 'images/br_zwart.png'},
    {'name': 'images/br_dans.png', 'path': 'images/br_dans.png'},
    {'name': 'images/br_liefje.png', 'path': 'images/br_liefje.png'},
    {'name': 'images/br_invloed.png', 'path': 'images/br_invloed.png'},
    {'name': 'images/br_koppen.png', 'path': 'images/br_koppen.png'},
    {'name': 'images/br_getuigen.png', 'path': 'images/br_getuigen.png'},
    {'name': 'images/br_grappen.png', 'path': 'images/br_grappen.png'},
    {'name': 'images/br_gegeven.png', 'path': 'images/br_gegeven.png'},
    {'name': 'images/br_gout.png', 'path': 'images/br_gout.png'},
    {'name': 'images/br_baas.png', 'path': 'images/br_baas.png'},
    {'name': 'images/br_knaap.png', 'path': 'images/br_knaap.png'},
    {'name': 'images/br_mugeek.png', 'path': 'images/br_mugeek.png'},
    {'name': 'images/br_steek.png', 'path': 'images/br_steek.png'},
    {'name': 'images/br_uniek.png', 'path': 'images/br_uniek.png'},
    {'name': 'images/br_zweven.png', 'path': 'images/br_zweven.png'},
    {'name': 'images/br_vuur.png', 'path': 'images/br_vuur.png'},
    {'name': 'images/br_kreeft.png', 'path': 'images/br_kreeft.png'},
    {'name': 'images/br_lukken.png', 'path': 'images/br_lukken.png'},
    {'name': 'images/br_voorraad.png', 'path': 'images/br_voorraad.png'},
    {'name': 'images/br_blik.png', 'path': 'images/br_blik.png'},
    {'name': 'images/br_goedkoop.png', 'path': 'images/br_goedkoop.png'},
    {'name': 'images/br_twaaf.png', 'path': 'images/br_twaaf.png'},
    {'name': 'images/br_glijden.png', 'path': 'images/br_glijden.png'},
    {'name': 'images/br_maling.png', 'path': 'images/br_maling.png'},
    {'name': 'images/br_aflopen.png', 'path': 'images/br_aflopen.png'},
    {'name': 'images/br_opzetten.png', 'path': 'images/br_opzetten.png'},
    {'name': 'images/br_woede.png', 'path': 'images/br_woede.png'},
    {'name': 'images/br_invallen.png', 'path': 'images/br_invallen.png'},
    {'name': 'images/br_mand.png', 'path': 'images/br_mand.png'},
    {'name': 'training_d3.csv', 'path': 'training_d3.csv'},
    {'name': 'images/br_joggen.png', 'path': 'images/br_joggen.png'},
    {'name': 'images/br_bloeien.png', 'path': 'images/br_bloeien.png'},
    {'name': 'images/br_moes.png', 'path': 'images/br_moes.png'},
    {'name': 'images/br_stiekem.png', 'path': 'images/br_stiekem.png'},
    {'name': 'images/br_hier.png', 'path': 'images/br_hier.png'},
    {'name': 'images/br_komisch.png', 'path': 'images/br_komisch.png'},
    {'name': 'images/br_loyaal.png', 'path': 'images/br_loyaal.png'},
    {'name': 'images/br_kring.png', 'path': 'images/br_kring.png'},
    {'name': 'images/br_taal.png', 'path': 'images/br_taal.png'},
    {'name': 'images/br_maken.png', 'path': 'images/br_maken.png'},
    {'name': 'images/br_eetlust.png', 'path': 'images/br_eetlust.png'},
    {'name': 'images/br_strekken.png', 'path': 'images/br_strekken.png'},
    {'name': 'images/br_schodel.png', 'path': 'images/br_schodel.png'},
    {'name': 'images/br_heengaan.png', 'path': 'images/br_heengaan.png'},
    {'name': 'images/br_uviek.png', 'path': 'images/br_uviek.png'},
    {'name': 'images/br_vlager.png', 'path': 'images/br_vlager.png'},
    {'name': 'images/br_nodig.png', 'path': 'images/br_nodig.png'},
    {'name': 'images/br_parel.png', 'path': 'images/br_parel.png'},
    {'name': 'images/br_afval.png', 'path': 'images/br_afval.png'},
    {'name': 'images/br_hust.png', 'path': 'images/br_hust.png'},
    {'name': 'images/br_waken.png', 'path': 'images/br_waken.png'},
    {'name': 'images/br_gedicht.png', 'path': 'images/br_gedicht.png'},
    {'name': 'images/br_slapen.png', 'path': 'images/br_slapen.png'},
    {'name': 'images/br_feestdag.png', 'path': 'images/br_feestdag.png'},
    {'name': 'images/br_theeting.png', 'path': 'images/br_theeting.png'},
    {'name': 'images/br_wegen.png', 'path': 'images/br_wegen.png'},
    {'name': 'images/br_gezond.png', 'path': 'images/br_gezond.png'},
    {'name': 'images/br_koffie.png', 'path': 'images/br_koffie.png'},
    {'name': 'images/br_driemaal.png', 'path': 'images/br_driemaal.png'},
    {'name': 'images/br_jagen.png', 'path': 'images/br_jagen.png'},
    {'name': 'images/br_tekst.png', 'path': 'images/br_tekst.png'},
    {'name': 'images/br_leek.png', 'path': 'images/br_leek.png'},
    {'name': 'images/br_ziek.png', 'path': 'images/br_ziek.png'},
    {'name': 'images/br_waarvan.png', 'path': 'images/br_waarvan.png'},
    {'name': 'images/br_twijfel.png', 'path': 'images/br_twijfel.png'},
    {'name': 'images/br_volop.png', 'path': 'images/br_volop.png'},
    {'name': 'images/br_redding.png', 'path': 'images/br_redding.png'},
    {'name': 'images/br_huisdier.png', 'path': 'images/br_huisdier.png'},
    {'name': 'images/br_doodmoe.png', 'path': 'images/br_doodmoe.png'},
    {'name': 'images/br_vervoer.png', 'path': 'images/br_vervoer.png'},
    {'name': 'images/br_opheffen.png', 'path': 'images/br_opheffen.png'},
    {'name': 'images/br_geheim.png', 'path': 'images/br_geheim.png'},
    {'name': 'images/br_onrecht.png', 'path': 'images/br_onrecht.png'},
    {'name': 'images/br_hint.png', 'path': 'images/br_hint.png'},
    {'name': 'images/br_akkoord.png', 'path': 'images/br_akkoord.png'},
    {'name': 'images/br_aandelen.png', 'path': 'images/br_aandelen.png'},
    {'name': 'images/br_eens.png', 'path': 'images/br_eens.png'},
    {'name': 'images/br_bevret.png', 'path': 'images/br_bevret.png'},
    {'name': 'images/br_aanraden.png', 'path': 'images/br_aanraden.png'},
    {'name': 'images/br_praat.png', 'path': 'images/br_praat.png'},
    {'name': 'images/br_gerucht.png', 'path': 'images/br_gerucht.png'},
    {'name': 'images/br_gebod.png', 'path': 'images/br_gebod.png'},
    {'name': 'images/br_attentie.png', 'path': 'images/br_attentie.png'},
    {'name': 'images/br_zuster.png', 'path': 'images/br_zuster.png'},
    {'name': 'images/br_lever.png', 'path': 'images/br_lever.png'},
    {'name': 'images/br_anarchie.png', 'path': 'images/br_anarchie.png'},
    {'name': 'images/br_makieren.png', 'path': 'images/br_makieren.png'},
    {'name': 'images/br_vlek.png', 'path': 'images/br_vlek.png'},
    {'name': 'images/br_kaal.png', 'path': 'images/br_kaal.png'},
    {'name': 'images/br_zout.png', 'path': 'images/br_zout.png'},
    {'name': 'images/br_oprotten.png', 'path': 'images/br_oprotten.png'},
    {'name': 'images/br_booien.png', 'path': 'images/br_booien.png'},
    {'name': 'images/br_boeien.png', 'path': 'images/br_boeien.png'},
    {'name': 'images/br_strikken.png', 'path': 'images/br_strikken.png'},
    {'name': 'images/br_excuus.png', 'path': 'images/br_excuus.png'},
    {'name': 'images/br_apparaat.png', 'path': 'images/br_apparaat.png'},
    {'name': 'images/br_strak.png', 'path': 'images/br_strak.png'},
    {'name': 'images/br_afnemen.png', 'path': 'images/br_afnemen.png'},
    {'name': 'images/br_croo.png', 'path': 'images/br_croo.png'},
    {'name': 'images/br_rechten.png', 'path': 'images/br_rechten.png'},
    {'name': 'images/br_rijp.png', 'path': 'images/br_rijp.png'},
    {'name': 'images/br_mijn.png', 'path': 'images/br_mijn.png'},
    {'name': 'images/br_uitdelen.png', 'path': 'images/br_uitdelen.png'},
    {'name': 'images/br_mist.png', 'path': 'images/br_mist.png'},
    {'name': 'images/br_snuiven.png', 'path': 'images/br_snuiven.png'},
    {'name': 'images/br_verraden.png', 'path': 'images/br_verraden.png'},
    {'name': 'images/br_waarop.png', 'path': 'images/br_waarop.png'},
    {'name': 'images/br_nakijken.png', 'path': 'images/br_nakijken.png'},
    {'name': 'images/br_slak.png', 'path': 'images/br_slak.png'},
    {'name': 'images/br_stal.png', 'path': 'images/br_stal.png'},
    {'name': 'images/br_baai.png', 'path': 'images/br_baai.png'},
    {'name': 'images/br_stof.png', 'path': 'images/br_stof.png'},
    {'name': 'images/br_flirt.png', 'path': 'images/br_flirt.png'},
    {'name': 'images/br_woning.png', 'path': 'images/br_woning.png'},
    {'name': 'images/br_laag.png', 'path': 'images/br_laag.png'},
    {'name': 'images/br_flits.png', 'path': 'images/br_flits.png'},
    {'name': 'images/br_smullen.png', 'path': 'images/br_smullen.png'},
    {'name': 'images/br_klauw.png', 'path': 'images/br_klauw.png'},
    {'name': 'images/br_hechten.png', 'path': 'images/br_hechten.png'},
    {'name': 'images/br_verwoor.png', 'path': 'images/br_verwoor.png'},
    {'name': 'images/br_jongelui.png', 'path': 'images/br_jongelui.png'},
    {'name': 'images/br_site.png', 'path': 'images/br_site.png'},
    {'name': 'images/br_toegeven.png', 'path': 'images/br_toegeven.png'},
    {'name': 'images/br_traag.png', 'path': 'images/br_traag.png'},
    {'name': 'images/br_verhaal.png', 'path': 'images/br_verhaal.png'},
    {'name': 'images/br_stallen.png', 'path': 'images/br_stallen.png'},
    {'name': 'images/br_weeshuis.png', 'path': 'images/br_weeshuis.png'},
    {'name': 'images/br_baron.png', 'path': 'images/br_baron.png'},
    {'name': 'images/br_maaltijd.png', 'path': 'images/br_maaltijd.png'},
    {'name': 'images/br_oceaan.png', 'path': 'images/br_oceaan.png'},
    {'name': 'images/br_kest.png', 'path': 'images/br_kest.png'},
    {'name': 'images/br_heilig.png', 'path': 'images/br_heilig.png'},
    {'name': 'images/br_muziek.png', 'path': 'images/br_muziek.png'},
    {'name': 'images/br_prikken.png', 'path': 'images/br_prikken.png'},
    {'name': 'images/br_uien.png', 'path': 'images/br_uien.png'},
    {'name': 'images/br_middelen.png', 'path': 'images/br_middelen.png'},
    {'name': 'images/br_laken.png', 'path': 'images/br_laken.png'},
    {'name': 'images/br_dwang.png', 'path': 'images/br_dwang.png'},
    {'name': 'images/br_schaamte.png', 'path': 'images/br_schaamte.png'},
    {'name': 'images/br_jasje.png', 'path': 'images/br_jasje.png'},
    {'name': 'images/br_zone.png', 'path': 'images/br_zone.png'},
    {'name': 'images/br_snoep.png', 'path': 'images/br_snoep.png'},
    {'name': 'images/br_schuilen.png', 'path': 'images/br_schuilen.png'},
    {'name': 'images/br_mode.png', 'path': 'images/br_mode.png'},
    {'name': 'images/br_aanzoek.png', 'path': 'images/br_aanzoek.png'},
    {'name': 'images/br_openbaar.png', 'path': 'images/br_openbaar.png'},
    {'name': 'images/br_wagon.png', 'path': 'images/br_wagon.png'},
    {'name': 'images/br_bedoelen.png', 'path': 'images/br_bedoelen.png'},
    {'name': 'images/br_beslag.png', 'path': 'images/br_beslag.png'},
    {'name': 'images/br_geit.png', 'path': 'images/br_geit.png'},
    {'name': 'images/br_aarzelen.png', 'path': 'images/br_aarzelen.png'},
    {'name': 'images/br_afbopen.png', 'path': 'images/br_afbopen.png'},
    {'name': 'images/br_gebit.png', 'path': 'images/br_gebit.png'}
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

  psychoJS.experiment.dataFileName = (("." + "/") + ((("sub-" + expInfo["ID"]) + "_ses-003_task-training_script-BR_date-") + expInfo["date"]));

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://psykuleuven.sona-systems.com/webstudy_credit.aspx?experiment_id=1767&credit_token=98e3a8ee886b4335b0abe04ab1a82165&survey_code=' + expInfo['participant']), '');

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
    text: 'Goeiedag en welkom,\n\nVandaag gaan we ons enkel concentreren op het leren van woorden. Net als in de vorige sessies zal er een gedeelte zijn waarin we bepaalde woorden oefenen, en daarna een test om te zien hoe goed u het doet. \n\nKlik met de muis om verder te gaan met de instructies.\n',
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
    text: 'Ter herinnering: u krijgt een woord in het nieuwe alfabet voorgeschoteld. We vragen u om het in stilte te lezen en het te proberen decoderen in Nederlandse letters. Wanneer u dit heeft gedaan, drukt u op de “pijl omlaag” op uw toetsenbord om de oplossing te zien. Daarna klikt u met de muis om verder te gaan naar het volgende woord. \n\nSoms ziet u een witte balk en wordt u gevraagd het antwoord te typen in plaats van het te decoderen in uw hoofd. De opdracht is dezelfde: druk op de onderste pijl op uw toetsenbord om de oplossing te controleren. Klik daarna met de muis om verder te gaan. \n\nNa de training volgt nog een korte test, dus let goed op de woorden. \n\nKlik met de muis om te starten met het leren van de woorden, en om door te gaan naar het volgende woord. \n',
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
    text: "We gaan nu een korte test doen om te zien hoe goed u deze woorden heeft geleerd.\n\nU krijgt 60 items voorgelegd. Sommige zijn woorden die u net hebt gezien, sommige zijn nieuw en sommige hebben geen betekenis (niet-woorden). \nNa 6 seconden verdwijnen de woorden en wordt u gevraagd om de overeenkomstige letterreeks (de vertaling) in te typen in het antwoordveld dat verschijnt. \nAls er een letter is die je niet meer weet, kun je die overslaan door de letter simpelweg te vervangen door een punt '.'\n\nProbeer zo nauwkeurig mogelijk te zijn.\n\nZodra uw antwoord is ingevoerd, klikt u met de muis om naar het volgende woord te gaan. \n\nAls u klaar bent voor de test, klik dan met de muis om te beginnen.\n",
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
    text: 'De test is nu voorbij.\n\nDit betekent dat de oefening voorlopig voorbij is. Wacht tot het pop-up venster is gesloten voordat u de webpagina verlaat. \n\nTot binnen enkele dagen!\n\n\n',
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
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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


var _mouseXYs;
function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of train_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of train_instrComponents)
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


function train_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_instr' ---
    for (const thisComponent of train_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
      trialList: 'training_d3.csv',
      seed: undefined, name: 'train_loop'
    });
    psychoJS.experiment.addLoop(train_loop); // add the loop to the experiment
    currentLoop = train_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrain_loop of train_loop) {
      snapshot = train_loop.getSnapshot();
      train_loopLoopScheduler.add(importConditions(snapshot));
      train_loopLoopScheduler.add(word_trainingRoutineBegin(snapshot));
      train_loopLoopScheduler.add(word_trainingRoutineEachFrame());
      train_loopLoopScheduler.add(word_trainingRoutineEnd(snapshot));
      train_loopLoopScheduler.add(train_loopLoopEndIteration(train_loopLoopScheduler, snapshot));
    }
    
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
      trialList: 'test_d3.csv',
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
    braille_word.setImage(brWrd);
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
    // setup some python lists for storing info about the trWrd_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    word_trainingComponents = [];
    word_trainingComponents.push(braille_word);
    word_trainingComponents.push(dutch_word);
    word_trainingComponents.push(translation_key);
    word_trainingComponents.push(word_rsp);
    word_trainingComponents.push(trWrd_mouse);
    
    for (const thisComponent of word_trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    if (t >= 3.0 && translation_key.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of word_trainingComponents)
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


function word_trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'word_training' ---
    for (const thisComponent of word_trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    test_word.setImage(brWrd);
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
