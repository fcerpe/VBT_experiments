/******************** 
 * Vbt_B1_Day2 Test *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'vbt_B1_day2';  // from the Builder filename that created this script
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
flowScheduler.add(refresh_instrRoutineBegin());
flowScheduler.add(refresh_instrRoutineEachFrame());
flowScheduler.add(refresh_instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
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
    {'name': 'images/br_joes.png', 'path': 'images/br_joes.png'},
    {'name': 'images/br_woestijn.png', 'path': 'images/br_woestijn.png'},
    {'name': 'images/br_piste.png', 'path': 'images/br_piste.png'},
    {'name': 'images/br_geliefd.png', 'path': 'images/br_geliefd.png'},
    {'name': 'images/br_poes.png', 'path': 'images/br_poes.png'},
    {'name': 'images/br_zwager.png', 'path': 'images/br_zwager.png'},
    {'name': 'images/br_soda.png', 'path': 'images/br_soda.png'},
    {'name': 'images/br_toeval.png', 'path': 'images/br_toeval.png'},
    {'name': 'images/br_ticket.png', 'path': 'images/br_ticket.png'},
    {'name': 'images/br_vreten.png', 'path': 'images/br_vreten.png'},
    {'name': 'images/br_techniek.png', 'path': 'images/br_techniek.png'},
    {'name': 'images/br_kennis.png', 'path': 'images/br_kennis.png'},
    {'name': 'images/br_schep.png', 'path': 'images/br_schep.png'},
    {'name': 'images/br_knie.png', 'path': 'images/br_knie.png'},
    {'name': 'images/br_jurk.png', 'path': 'images/br_jurk.png'},
    {'name': 'images/br_palm.png', 'path': 'images/br_palm.png'},
    {'name': 'images/br_daarheen.png', 'path': 'images/br_daarheen.png'},
    {'name': 'images/br_blad.png', 'path': 'images/br_blad.png'},
    {'name': 'images/br_d.png', 'path': 'images/br_d.png'},
    {'name': 'images/br_klimmen.png', 'path': 'images/br_klimmen.png'},
    {'name': 'images/br_groen.png', 'path': 'images/br_groen.png'},
    {'name': 'images/br_weigeren.png', 'path': 'images/br_weigeren.png'},
    {'name': 'images/br_seizoen.png', 'path': 'images/br_seizoen.png'},
    {'name': 'images/br_sjijfel.png', 'path': 'images/br_sjijfel.png'},
    {'name': 'images/br_opdatten.png', 'path': 'images/br_opdatten.png'},
    {'name': 'images/br_vorm.png', 'path': 'images/br_vorm.png'},
    {'name': 'images/br_kanjer.png', 'path': 'images/br_kanjer.png'},
    {'name': 'images/br_bijkomen.png', 'path': 'images/br_bijkomen.png'},
    {'name': 'images/br_leuk.png', 'path': 'images/br_leuk.png'},
    {'name': 'images/br_plek.png', 'path': 'images/br_plek.png'},
    {'name': 'images/br_graaf.png', 'path': 'images/br_graaf.png'},
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
    {'name': 'images/br_agressie.png', 'path': 'images/br_agressie.png'},
    {'name': 'images/br_staren.png', 'path': 'images/br_staren.png'},
    {'name': 'images/br_geld.png', 'path': 'images/br_geld.png'},
    {'name': 'images/br_leren.png', 'path': 'images/br_leren.png'},
    {'name': 'images/br_schat.png', 'path': 'images/br_schat.png'},
    {'name': 'images/br_slagen.png', 'path': 'images/br_slagen.png'},
    {'name': 'images/br_innemen.png', 'path': 'images/br_innemen.png'},
    {'name': 'images/br_ijdel.png', 'path': 'images/br_ijdel.png'},
    {'name': 'images/br_wijlen.png', 'path': 'images/br_wijlen.png'},
    {'name': 'images/br_g.png', 'path': 'images/br_g.png'},
    {'name': 'images/br_waarbij.png', 'path': 'images/br_waarbij.png'},
    {'name': 'images/br_bleek.png', 'path': 'images/br_bleek.png'},
    {'name': 'images/br_lokken.png', 'path': 'images/br_lokken.png'},
    {'name': 'images/br_stemming.png', 'path': 'images/br_stemming.png'},
    {'name': 'images/br_f.png', 'path': 'images/br_f.png'},
    {'name': 'images/br_kleren.png', 'path': 'images/br_kleren.png'},
    {'name': 'images/br_geluid.png', 'path': 'images/br_geluid.png'},
    {'name': 'images/red_outline.jpg', 'path': 'images/red_outline.jpg'},
    {'name': 'images/br_r.png', 'path': 'images/br_r.png'},
    {'name': 'images/br_totaal.png', 'path': 'images/br_totaal.png'},
    {'name': 'images/br_dubbel.png', 'path': 'images/br_dubbel.png'},
    {'name': 'images/br_hiervan.png', 'path': 'images/br_hiervan.png'},
    {'name': 'images/br_opkomen.png', 'path': 'images/br_opkomen.png'},
    {'name': 'images/br_heengeen.png', 'path': 'images/br_heengeen.png'},
    {'name': 'images/br_trekker.png', 'path': 'images/br_trekker.png'},
    {'name': 'images/br_samen.png', 'path': 'images/br_samen.png'},
    {'name': 'images/br_kasteel.png', 'path': 'images/br_kasteel.png'},
    {'name': 'images/br_spanning.png', 'path': 'images/br_spanning.png'},
    {'name': 'images/br_mening.png', 'path': 'images/br_mening.png'},
    {'name': 'images/br_opkijken.png', 'path': 'images/br_opkijken.png'},
    {'name': 'images/br_zaal.png', 'path': 'images/br_zaal.png'},
    {'name': 'images/br_i.png', 'path': 'images/br_i.png'},
    {'name': 'images/br_kust.png', 'path': 'images/br_kust.png'},
    {'name': 'images/br_aanzien.png', 'path': 'images/br_aanzien.png'},
    {'name': 'images/br_blijven.png', 'path': 'images/br_blijven.png'},
    {'name': 'images/br_uitlaat.png', 'path': 'images/br_uitlaat.png'},
    {'name': 'images/br_breuk.png', 'path': 'images/br_breuk.png'},
    {'name': 'images/br_knielen.png', 'path': 'images/br_knielen.png'},
    {'name': 'images/br_mijnheer.png', 'path': 'images/br_mijnheer.png'},
    {'name': 'images/br_lust.png', 'path': 'images/br_lust.png'},
    {'name': 'images/br_jaar.png', 'path': 'images/br_jaar.png'},
    {'name': 'images/br_opzicht.png', 'path': 'images/br_opzicht.png'},
    {'name': 'images/br_bisschop.png', 'path': 'images/br_bisschop.png'},
    {'name': 'images/br_keihard.png', 'path': 'images/br_keihard.png'},
    {'name': 'images/br_vullen.png', 'path': 'images/br_vullen.png'},
    {'name': 'images/br_beseffen.png', 'path': 'images/br_beseffen.png'},
    {'name': 'images/br_lijnen.png', 'path': 'images/br_lijnen.png'},
    {'name': 'images/br_tweeling.png', 'path': 'images/br_tweeling.png'},
    {'name': 'images/br_zwart.png', 'path': 'images/br_zwart.png'},
    {'name': 'images/br_x.png', 'path': 'images/br_x.png'},
    {'name': 'images/br_dans.png', 'path': 'images/br_dans.png'},
    {'name': 'images/br_liefje.png', 'path': 'images/br_liefje.png'},
    {'name': 'images/br_koppen.png', 'path': 'images/br_koppen.png'},
    {'name': 'images/br_invloed.png', 'path': 'images/br_invloed.png'},
    {'name': 'images/br_getuigen.png', 'path': 'images/br_getuigen.png'},
    {'name': 'images/br_u.png', 'path': 'images/br_u.png'},
    {'name': 'images/br_grappen.png', 'path': 'images/br_grappen.png'},
    {'name': 'images/br_gegeven.png', 'path': 'images/br_gegeven.png'},
    {'name': 'images/br_v.png', 'path': 'images/br_v.png'},
    {'name': 'images/br_baas.png', 'path': 'images/br_baas.png'},
    {'name': 'images/br_knaap.png', 'path': 'images/br_knaap.png'},
    {'name': 'images/br_steek.png', 'path': 'images/br_steek.png'},
    {'name': 'images/br_zweven.png', 'path': 'images/br_zweven.png'},
    {'name': 'images/br_vuur.png', 'path': 'images/br_vuur.png'},
    {'name': 'images/br_kreeft.png', 'path': 'images/br_kreeft.png'},
    {'name': 'images/br_lukken.png', 'path': 'images/br_lukken.png'},
    {'name': 'images/br_voorraad.png', 'path': 'images/br_voorraad.png'},
    {'name': 'images/br_blik.png', 'path': 'images/br_blik.png'},
    {'name': 'letters.csv', 'path': 'letters.csv'},
    {'name': 'images/br_goedkoop.png', 'path': 'images/br_goedkoop.png'},
    {'name': 'images/br_jong.png', 'path': 'images/br_jong.png'},
    {'name': 'images/br_maling.png', 'path': 'images/br_maling.png'},
    {'name': 'images/br_prekken.png', 'path': 'images/br_prekken.png'},
    {'name': 'images/br_aflopen.png', 'path': 'images/br_aflopen.png'},
    {'name': 'images/br_negel.png', 'path': 'images/br_negel.png'},
    {'name': 'images/br_wijve.png', 'path': 'images/br_wijve.png'},
    {'name': 'images/br_plannen.png', 'path': 'images/br_plannen.png'},
    {'name': 'training_d2.csv', 'path': 'training_d2.csv'},
    {'name': 'images/br_woede.png', 'path': 'images/br_woede.png'},
    {'name': 'images/br_mand.png', 'path': 'images/br_mand.png'},
    {'name': 'images/br_sifferd.png', 'path': 'images/br_sifferd.png'},
    {'name': 'images/br_joggen.png', 'path': 'images/br_joggen.png'},
    {'name': 'images/br_thema.png', 'path': 'images/br_thema.png'},
    {'name': 'images/br_bloeien.png', 'path': 'images/br_bloeien.png'},
    {'name': 'images/br_moes.png', 'path': 'images/br_moes.png'},
    {'name': 'images/br_stiekem.png', 'path': 'images/br_stiekem.png'},
    {'name': 'images/br_hier.png', 'path': 'images/br_hier.png'},
    {'name': 'images/br_komisch.png', 'path': 'images/br_komisch.png'},
    {'name': 'images/br_loyaal.png', 'path': 'images/br_loyaal.png'},
    {'name': 'images/br_tand.png', 'path': 'images/br_tand.png'},
    {'name': 'images/br_taal.png', 'path': 'images/br_taal.png'},
    {'name': 'images/br_kring.png', 'path': 'images/br_kring.png'},
    {'name': 'images/br_maken.png', 'path': 'images/br_maken.png'},
    {'name': 'images/br_eetlust.png', 'path': 'images/br_eetlust.png'},
    {'name': 'images/br_strekken.png', 'path': 'images/br_strekken.png'},
    {'name': 'images/br_krimmen.png', 'path': 'images/br_krimmen.png'},
    {'name': 'images/br_sora.png', 'path': 'images/br_sora.png'},
    {'name': 'images/br_remel.png', 'path': 'images/br_remel.png'},
    {'name': 'images/br_heengaan.png', 'path': 'images/br_heengaan.png'},
    {'name': 'images/br_a.png', 'path': 'images/br_a.png'},
    {'name': 'images/br_kenzis.png', 'path': 'images/br_kenzis.png'},
    {'name': 'images/br_n.png', 'path': 'images/br_n.png'},
    {'name': 'images/br_nodig.png', 'path': 'images/br_nodig.png'},
    {'name': 'images/br_parel.png', 'path': 'images/br_parel.png'},
    {'name': 'images/br_p.png', 'path': 'images/br_p.png'},
    {'name': 'images/br_afval.png', 'path': 'images/br_afval.png'},
    {'name': 'images/br_clan.png', 'path': 'images/br_clan.png'},
    {'name': 'images/br_waken.png', 'path': 'images/br_waken.png'},
    {'name': 'images/br_welzijn.png', 'path': 'images/br_welzijn.png'},
    {'name': 'images/br_gedicht.png', 'path': 'images/br_gedicht.png'},
    {'name': 'images/br_lurgen.png', 'path': 'images/br_lurgen.png'},
    {'name': 'images/br_slapen.png', 'path': 'images/br_slapen.png'},
    {'name': 'images/br_feestdag.png', 'path': 'images/br_feestdag.png'},
    {'name': 'images/br_systeem.png', 'path': 'images/br_systeem.png'},
    {'name': 'images/br_wegen.png', 'path': 'images/br_wegen.png'},
    {'name': 'images/br_gezond.png', 'path': 'images/br_gezond.png'},
    {'name': 'images/br_koffie.png', 'path': 'images/br_koffie.png'},
    {'name': 'images/br_driemaal.png', 'path': 'images/br_driemaal.png'},
    {'name': 'images/br_jagen.png', 'path': 'images/br_jagen.png'},
    {'name': 'images/br_tekst.png', 'path': 'images/br_tekst.png'},
    {'name': 'images/br_leek.png', 'path': 'images/br_leek.png'},
    {'name': 'images/br_ziek.png', 'path': 'images/br_ziek.png'},
    {'name': 'images/br_waarvan.png', 'path': 'images/br_waarvan.png'},
    {'name': 'images/br_y.png', 'path': 'images/br_y.png'},
    {'name': 'images/br_volop.png', 'path': 'images/br_volop.png'},
    {'name': 'images/br_twijfel.png', 'path': 'images/br_twijfel.png'},
    {'name': 'images/br_redding.png', 'path': 'images/br_redding.png'},
    {'name': 'images/br_huisdier.png', 'path': 'images/br_huisdier.png'},
    {'name': 'images/br_doodmoe.png', 'path': 'images/br_doodmoe.png'},
    {'name': 'images/br_vervoer.png', 'path': 'images/br_vervoer.png'},
    {'name': 'images/br_opheffen.png', 'path': 'images/br_opheffen.png'},
    {'name': 'images/br_geheim.png', 'path': 'images/br_geheim.png'},
    {'name': 'images/br_m.png', 'path': 'images/br_m.png'},
    {'name': 'images/br_akkoord.png', 'path': 'images/br_akkoord.png'},
    {'name': 'images/br_aandelen.png', 'path': 'images/br_aandelen.png'},
    {'name': 'images/br_aanraden.png', 'path': 'images/br_aanraden.png'},
    {'name': 'images/br_praat.png', 'path': 'images/br_praat.png'},
    {'name': 'images/br_t.png', 'path': 'images/br_t.png'},
    {'name': 'images/br_aanvraag.png', 'path': 'images/br_aanvraag.png'},
    {'name': 'images/br_gerucht.png', 'path': 'images/br_gerucht.png'},
    {'name': 'images/br_z.png', 'path': 'images/br_z.png'},
    {'name': 'images/br_attentie.png', 'path': 'images/br_attentie.png'},
    {'name': 'images/br_e.png', 'path': 'images/br_e.png'},
    {'name': 'images/br_lever.png', 'path': 'images/br_lever.png'},
    {'name': 'images/br_q.png', 'path': 'images/br_q.png'},
    {'name': 'images/br_zuster.png', 'path': 'images/br_zuster.png'},
    {'name': 'images/br_vlek.png', 'path': 'images/br_vlek.png'},
    {'name': 'images/br_kaal.png', 'path': 'images/br_kaal.png'},
    {'name': 'images/br_anarchie.png', 'path': 'images/br_anarchie.png'},
    {'name': 'images/br_zout.png', 'path': 'images/br_zout.png'},
    {'name': 'images/br_oprotten.png', 'path': 'images/br_oprotten.png'},
    {'name': 'images/br_boeien.png', 'path': 'images/br_boeien.png'},
    {'name': 'images/br_ophuimen.png', 'path': 'images/br_ophuimen.png'},
    {'name': 'images/br_strikken.png', 'path': 'images/br_strikken.png'},
    {'name': 'images/br_excuus.png', 'path': 'images/br_excuus.png'},
    {'name': 'images/br_apparaat.png', 'path': 'images/br_apparaat.png'},
    {'name': 'images/br_trots.png', 'path': 'images/br_trots.png'},
    {'name': 'images/br_kijlen.png', 'path': 'images/br_kijlen.png'},
    {'name': 'images/br_strak.png', 'path': 'images/br_strak.png'},
    {'name': 'images/br_afnemen.png', 'path': 'images/br_afnemen.png'},
    {'name': 'images/br_manieren.png', 'path': 'images/br_manieren.png'},
    {'name': 'images/br_w.png', 'path': 'images/br_w.png'},
    {'name': 'images/br_rechten.png', 'path': 'images/br_rechten.png'},
    {'name': 'images/br_zegel.png', 'path': 'images/br_zegel.png'},
    {'name': 'images/br_rijp.png', 'path': 'images/br_rijp.png'},
    {'name': 'images/br_mijn.png', 'path': 'images/br_mijn.png'},
    {'name': 'images/br_uitdelen.png', 'path': 'images/br_uitdelen.png'},
    {'name': 'images/br_mist.png', 'path': 'images/br_mist.png'},
    {'name': 'images/br_snuiven.png', 'path': 'images/br_snuiven.png'},
    {'name': 'images/br_badon.png', 'path': 'images/br_badon.png'},
    {'name': 'images/br_waarop.png', 'path': 'images/br_waarop.png'},
    {'name': 'images/br_nakijken.png', 'path': 'images/br_nakijken.png'},
    {'name': 'images/br_ningen.png', 'path': 'images/br_ningen.png'},
    {'name': 'images/br_slak.png', 'path': 'images/br_slak.png'},
    {'name': 'images/br_stal.png', 'path': 'images/br_stal.png'},
    {'name': 'images/br_o.png', 'path': 'images/br_o.png'},
    {'name': 'images/br_stof.png', 'path': 'images/br_stof.png'},
    {'name': 'images/br_baai.png', 'path': 'images/br_baai.png'},
    {'name': 'images/br_flirt.png', 'path': 'images/br_flirt.png'},
    {'name': 'images/br_woning.png', 'path': 'images/br_woning.png'},
    {'name': 'images/br_bereuwen.png', 'path': 'images/br_bereuwen.png'},
    {'name': 'images/br_dode.png', 'path': 'images/br_dode.png'},
    {'name': 'images/br_laag.png', 'path': 'images/br_laag.png'},
    {'name': 'images/br_flits.png', 'path': 'images/br_flits.png'},
    {'name': 'images/br_smullen.png', 'path': 'images/br_smullen.png'},
    {'name': 'images/br_klauw.png', 'path': 'images/br_klauw.png'},
    {'name': 'images/br_hechten.png', 'path': 'images/br_hechten.png'},
    {'name': 'images/br_site.png', 'path': 'images/br_site.png'},
    {'name': 'images/br_toegeven.png', 'path': 'images/br_toegeven.png'},
    {'name': 'images/br_traag.png', 'path': 'images/br_traag.png'},
    {'name': 'images/br_l.png', 'path': 'images/br_l.png'},
    {'name': 'images/br_verhaal.png', 'path': 'images/br_verhaal.png'},
    {'name': 'test_d2.csv', 'path': 'test_d2.csv'},
    {'name': 'images/br_weeshuis.png', 'path': 'images/br_weeshuis.png'},
    {'name': 'images/br_baron.png', 'path': 'images/br_baron.png'},
    {'name': 'images/br_maaltijd.png', 'path': 'images/br_maaltijd.png'},
    {'name': 'images/br_stes.png', 'path': 'images/br_stes.png'},
    {'name': 'images/br_goon.png', 'path': 'images/br_goon.png'},
    {'name': 'images/br_oceaan.png', 'path': 'images/br_oceaan.png'},
    {'name': 'images/br_k.png', 'path': 'images/br_k.png'},
    {'name': 'images/br_muziek.png', 'path': 'images/br_muziek.png'},
    {'name': 'images/br_heilig.png', 'path': 'images/br_heilig.png'},
    {'name': 'images/br_uien.png', 'path': 'images/br_uien.png'},
    {'name': 'images/br_prikken.png', 'path': 'images/br_prikken.png'},
    {'name': 'images/br_middelen.png', 'path': 'images/br_middelen.png'},
    {'name': 'images/br_c.png', 'path': 'images/br_c.png'},
    {'name': 'images/br_koorts.png', 'path': 'images/br_koorts.png'},
    {'name': 'images/br_laken.png', 'path': 'images/br_laken.png'},
    {'name': 'images/br_h.png', 'path': 'images/br_h.png'},
    {'name': 'images/br_schaamte.png', 'path': 'images/br_schaamte.png'},
    {'name': 'images/br_jasje.png', 'path': 'images/br_jasje.png'},
    {'name': 'images/br_snoep.png', 'path': 'images/br_snoep.png'},
    {'name': 'images/br_schuilen.png', 'path': 'images/br_schuilen.png'},
    {'name': 'images/br_mode.png', 'path': 'images/br_mode.png'},
    {'name': 'images/br_inzicht.png', 'path': 'images/br_inzicht.png'},
    {'name': 'images/br_j.png', 'path': 'images/br_j.png'},
    {'name': 'images/br_aanzoek.png', 'path': 'images/br_aanzoek.png'},
    {'name': 'images/br_b.png', 'path': 'images/br_b.png'},
    {'name': 'images/br_openbaar.png', 'path': 'images/br_openbaar.png'},
    {'name': 'images/br_wagon.png', 'path': 'images/br_wagon.png'},
    {'name': 'images/br_zomers.png', 'path': 'images/br_zomers.png'},
    {'name': 'images/br_bedoelen.png', 'path': 'images/br_bedoelen.png'},
    {'name': 'images/br_geit.png', 'path': 'images/br_geit.png'},
    {'name': 'images/br_s.png', 'path': 'images/br_s.png'},
    {'name': 'images/br_aarzelen.png', 'path': 'images/br_aarzelen.png'},
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

  psychoJS.experiment.dataFileName = (("." + "/") + ((("sub-" + expInfo["ID"]) + "_ses-002_task-training_script-BR_date-") + expInfo["date"]));

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://psykuleuven.sona-systems.com/webstudy_credit.aspx?experiment_id=1766&credit_token=1b4830608445410dbc7387ca14cb8ab7&survey_code=' + expInfo['participant']), '');

  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var welcome_mouse;
var refresh_instrClock;
var refresh_text;
var refresh_mouse;
var let_refreshClock;
var outline;
var braille_letter;
var dutch_letter;
var braille_mouse;
var train_instrClock;
var trainInstr_text;
var trainInstr_mouse;
var word_trainingClock;
var braille_word;
var dutch_word;
var translation_key;
var word_rsp;
var word_mouse;
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
    text: 'Goeiedag,\n\nIn deze tweede trainingssessie gaan we eerst de letters bekijken, en daarna beginnen we met het leren van de woorden. \n\nHet trainingsgedeelte voor de letters is hetzelfde als in de vorige sessie.\n\nVoor de woorden wordt de Nederlandse vertaling van elk woord voorgesteld.\n\nAls u klaar bent, dan klikt u met de muis om verder te gaan. \n',
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
  // Initialize components for Routine "refresh_instr"
  refresh_instrClock = new util.Clock();
  refresh_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'refresh_text',
    text: 'We zullen uw kennis over de letters opnieuw opfrissen.\n\nDe opdracht is dezelfde als in de vorige sessie: u ziet eerst de letter van de nieuwe taal en daarna zijn overeenkomstige letter in het Nederlands. \nDoor met de muis te klikken gaat u naar de volgende letter. Elke letter zal slechts één keer worden herhaald.\n\nAls u klaar bent om te beginnen, dan klikt u op de muis om de training te starten. \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  refresh_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  refresh_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "let_refresh"
  let_refreshClock = new util.Clock();
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
  // Initialize components for Routine "train_instr"
  train_instrClock = new util.Clock();
  trainInstr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trainInstr_text',
    text: 'We zijn klaar met de letters.\n\nNu gaan we woorden vormen met de nieuwe letters die u heeft geleerd. \n\nU ziet een woord geschreven in het nieuwe alfabet. We vragen u om het in stilte te lezen en het te proberen decoderen in Nederlandse letters. Wanneer u dit heeft gedaan, drukt u op de “pijl omlaag” op uw toetsenbord om de oplossing te zien. Daarna klikt u met de muis om verder te gaan naar het volgende woord.\n\nSoms ziet u een witte balk en wordt u gevraagd het antwoord te typen in plaats van het te decoderen in uw hoofd. De opdracht is dezelfde: druk op de onderste pijl op uw toetsenbord om de oplossing te controleren. Klik daarna met de muis om verder te gaan. \n\nNa de training volgt nog een korte test, dus let goed op de woorden. \n\nKlik met de muis om te starten met het leren van de woorden, en door te gaan naar het volgende woord.\n',
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
  
  word_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  word_mouse.mouseClock = new util.Clock();
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
    text: "We gaan nu een korte test doen om te zien hoe goed u deze woorden heeft geleerd. \n\nU krijgt 60 items voorgelegd. Sommige zijn woorden die u net hebt gezien, sommige zijn nieuw en sommige hebben geen betekenis (niet-woorden). \nNa 6 seconden verdwijnen de woorden en wordt u gevraagd om de overeenkomstige letterreeks (de vertaling) in te typen in het antwoordveld dat verschijnt.\nAls er een letter is die je niet meer weet, kun je die overslaan door de letter simpelweg te vervangen door een punt '.'\n\nProbeer zo nauwkeurig mogelijk te zijn.\n\nZodra uw antwoord is ingevoerd, klikt u met de muis om naar het volgende woord te gaan. \n\nAls u klaar bent voor de test, klik dan met de muis om te beginnen.\n",
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


var refresh_instrComponents;
function refresh_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'refresh_instr' ---
    t = 0;
    refresh_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the refresh_mouse
    // current position of the mouse:
    refresh_mouse.x = [];
    refresh_mouse.y = [];
    refresh_mouse.leftButton = [];
    refresh_mouse.midButton = [];
    refresh_mouse.rightButton = [];
    refresh_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    refresh_instrComponents = [];
    refresh_instrComponents.push(refresh_text);
    refresh_instrComponents.push(refresh_mouse);
    
    for (const thisComponent of refresh_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function refresh_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'refresh_instr' ---
    // get current time
    t = refresh_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *refresh_text* updates
    if (t >= 0.0 && refresh_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      refresh_text.tStart = t;  // (not accounting for frame time here)
      refresh_text.frameNStart = frameN;  // exact frame index
      
      refresh_text.setAutoDraw(true);
    }

    // *refresh_mouse* updates
    if (t >= 0.0 && refresh_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      refresh_mouse.tStart = t;  // (not accounting for frame time here)
      refresh_mouse.frameNStart = frameN;  // exact frame index
      
      refresh_mouse.status = PsychoJS.Status.STARTED;
      refresh_mouse.mouseClock.reset();
      prevButtonState = refresh_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (refresh_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = refresh_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = refresh_mouse.getPos();
          refresh_mouse.x.push(_mouseXYs[0]);
          refresh_mouse.y.push(_mouseXYs[1]);
          refresh_mouse.leftButton.push(_mouseButtons[0]);
          refresh_mouse.midButton.push(_mouseButtons[1]);
          refresh_mouse.rightButton.push(_mouseButtons[2]);
          refresh_mouse.time.push(refresh_mouse.mouseClock.getTime());
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
    for (const thisComponent of refresh_instrComponents)
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


function refresh_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'refresh_instr' ---
    for (const thisComponent of refresh_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (refresh_mouse.x) {  psychoJS.experiment.addData('refresh_mouse.x', refresh_mouse.x[0])};
    if (refresh_mouse.y) {  psychoJS.experiment.addData('refresh_mouse.y', refresh_mouse.y[0])};
    if (refresh_mouse.leftButton) {  psychoJS.experiment.addData('refresh_mouse.leftButton', refresh_mouse.leftButton[0])};
    if (refresh_mouse.midButton) {  psychoJS.experiment.addData('refresh_mouse.midButton', refresh_mouse.midButton[0])};
    if (refresh_mouse.rightButton) {  psychoJS.experiment.addData('refresh_mouse.rightButton', refresh_mouse.rightButton[0])};
    if (refresh_mouse.time) {  psychoJS.experiment.addData('refresh_mouse.time', refresh_mouse.time[0])};
    
    // the Routine "refresh_instr" was not non-slip safe, so reset the non-slip timer
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
      nReps: 1, method: TrialHandler.Method.RANDOM,
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
      trialsLoopScheduler.add(let_refreshRoutineBegin(snapshot));
      trialsLoopScheduler.add(let_refreshRoutineEachFrame());
      trialsLoopScheduler.add(let_refreshRoutineEnd(snapshot));
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


var train_loop;
function train_loopLoopBegin(train_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    train_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'training_d2.csv',
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
      trialList: 'test_d2.csv',
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


var let_refreshComponents;
function let_refreshRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'let_refresh' ---
    t = 0;
    let_refreshClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    braille_letter.setImage(brLet);
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
    let_refreshComponents = [];
    let_refreshComponents.push(outline);
    let_refreshComponents.push(braille_letter);
    let_refreshComponents.push(dutch_letter);
    let_refreshComponents.push(braille_mouse);
    
    for (const thisComponent of let_refreshComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function let_refreshRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'let_refresh' ---
    // get current time
    t = let_refreshClock.getTime();
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
    for (const thisComponent of let_refreshComponents)
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


function let_refreshRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'let_refresh' ---
    for (const thisComponent of let_refreshComponents) {
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
    
    // the Routine "let_refresh" was not non-slip safe, so reset the non-slip timer
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
    // current position of the mouse:
    trainInstr_mouse.x = [];
    trainInstr_mouse.y = [];
    trainInstr_mouse.leftButton = [];
    trainInstr_mouse.midButton = [];
    trainInstr_mouse.rightButton = [];
    trainInstr_mouse.time = [];
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
          _mouseXYs = trainInstr_mouse.getPos();
          trainInstr_mouse.x.push(_mouseXYs[0]);
          trainInstr_mouse.y.push(_mouseXYs[1]);
          trainInstr_mouse.leftButton.push(_mouseButtons[0]);
          trainInstr_mouse.midButton.push(_mouseButtons[1]);
          trainInstr_mouse.rightButton.push(_mouseButtons[2]);
          trainInstr_mouse.time.push(trainInstr_mouse.mouseClock.getTime());
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
    if (trainInstr_mouse.x) {  psychoJS.experiment.addData('trainInstr_mouse.x', trainInstr_mouse.x[0])};
    if (trainInstr_mouse.y) {  psychoJS.experiment.addData('trainInstr_mouse.y', trainInstr_mouse.y[0])};
    if (trainInstr_mouse.leftButton) {  psychoJS.experiment.addData('trainInstr_mouse.leftButton', trainInstr_mouse.leftButton[0])};
    if (trainInstr_mouse.midButton) {  psychoJS.experiment.addData('trainInstr_mouse.midButton', trainInstr_mouse.midButton[0])};
    if (trainInstr_mouse.rightButton) {  psychoJS.experiment.addData('trainInstr_mouse.rightButton', trainInstr_mouse.rightButton[0])};
    if (trainInstr_mouse.time) {  psychoJS.experiment.addData('trainInstr_mouse.time', trainInstr_mouse.time[0])};
    
    // the Routine "train_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
    console.log(translation_key.keys);
    
    word_rsp.setText('');
    word_rsp.refresh();
    word_rsp.setText('');
    // setup some python lists for storing info about the word_mouse
    // current position of the mouse:
    word_mouse.x = [];
    word_mouse.y = [];
    word_mouse.leftButton = [];
    word_mouse.midButton = [];
    word_mouse.rightButton = [];
    word_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    word_trainingComponents = [];
    word_trainingComponents.push(braille_word);
    word_trainingComponents.push(dutch_word);
    word_trainingComponents.push(translation_key);
    word_trainingComponents.push(word_rsp);
    word_trainingComponents.push(word_mouse);
    
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
    if (t >= 3 && translation_key.status === PsychoJS.Status.NOT_STARTED) {
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

    // *word_mouse* updates
    if (((translation_key.keys == 'down')) && word_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_mouse.tStart = t;  // (not accounting for frame time here)
      word_mouse.frameNStart = frameN;  // exact frame index
      
      word_mouse.status = PsychoJS.Status.STARTED;
      word_mouse.mouseClock.reset();
      prevButtonState = word_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (word_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = word_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = word_mouse.getPos();
          word_mouse.x.push(_mouseXYs[0]);
          word_mouse.y.push(_mouseXYs[1]);
          word_mouse.leftButton.push(_mouseButtons[0]);
          word_mouse.midButton.push(_mouseButtons[1]);
          word_mouse.rightButton.push(_mouseButtons[2]);
          word_mouse.time.push(word_mouse.mouseClock.getTime());
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
    if (word_mouse.x) {  psychoJS.experiment.addData('word_mouse.x', word_mouse.x[0])};
    if (word_mouse.y) {  psychoJS.experiment.addData('word_mouse.y', word_mouse.y[0])};
    if (word_mouse.leftButton) {  psychoJS.experiment.addData('word_mouse.leftButton', word_mouse.leftButton[0])};
    if (word_mouse.midButton) {  psychoJS.experiment.addData('word_mouse.midButton', word_mouse.midButton[0])};
    if (word_mouse.rightButton) {  psychoJS.experiment.addData('word_mouse.rightButton', word_mouse.rightButton[0])};
    if (word_mouse.time) {  psychoJS.experiment.addData('word_mouse.time', word_mouse.time[0])};
    
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
