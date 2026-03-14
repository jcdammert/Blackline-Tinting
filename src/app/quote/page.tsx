'use client'

import { useState } from 'react'

const WEBHOOK = 'https://services.leadconnectorhq.com/hooks/WW2K840JVLSOPOTKsMfb/webhook-trigger/69a370f7-71bf-4fec-8ccf-948fcc9ef2dc'

type Service = 'tinting' | 'ppf' | 'ceramic' | ''

export default function Quote() {
    const [step, setStep] = useState(1)
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<string[]>([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [service, setService] = useState<Service>('')
    const [tintWindows, setTintWindows] = useState<string[]>([])
    const [hasExistingTint, setHasExistingTint] = useState<boolean | null>(null)
    const [existingTintWindows, setExistingTintWindows] = useState<string[]>([])
    const [ppfAreas, setPpfAreas] = useState<string[]>([])
    const [ceramicAreas, setCeramicAreas] = useState<string[]>([])
    const [timeline, setTimeline] = useState('')
    const [appointmentTime, setAppointmentTime] = useState('')
    const [message, setMessage] = useState('')

  function toggleCheck(arr: string[], setArr: (v: string[]) => void, val: string) {
        setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])
  }

  function validate(s: number): string[] {
        const errs: string[] = []
              if (s === 1) {
                      if (!firstName.trim()) errs.push('First name is required')
                      if (!phone.trim()) errs.push('Phone number is required')
                      if (!email.trim()) errs.push('Email address is required')
              }
        if (s === 2) { if (!service) errs.push('Please select a service') }
        if (s === 3) {
                if (service === 'tinting' && tintWindows.length === 0) errs.push('Please select at least one window option')
                if (service === 'ppf' && ppfAreas.length === 0) errs.push('Please select at least one area')
                if (service === 'ceramic' && ceramicAreas.length === 0) errs.push('Please select at least one option')
        }
        if (s === 4) { if (!timeline) errs.push('Please select a timeline') }
        return errs
  }

  function next() {
        const errs = validate(step)
        if (errs.length > 0) { setErrors(errs); return }
        setErrors([])
        setStep(step + 1)
  }

  function back() { setErrors([]); setStep(step - 1) }

  async function handleSubmit() {
        const errs = validate(4)
        if (errs.length > 0) { setErrors(errs); return }
        setErrors([])
        setLoading(true)
        try {
                await fetch(WEBHOOK, {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ firstName, lastName, phone, email, vehicle, service, tintWindows: tintWindows.join(', '), hasExistingTint, existingTintWindows: existingTintWindows.join(', '), ppfAreas: ppfAreas.join(', '), ceramicAreas: ceramicAreas.join(', '), timeline, appointmentTime, message }),
                })
                setSubmitted(true)
        } catch { alert('Something went wrong. Please call us directly.') }
        finally { setLoading(false) }
  }

  const progressWidth = `${(step / 4) * 100}%`
    const sBtnBack: React.CSSProperties = { padding: '10px 24px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }
    const sBtnNext: React.CSSProperties = { padding: '10px 24px', borderRadius: '8px', border: 'none', background: 'var(--blue)', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }
    const sBtnRow: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }
    const sLabel: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px', cursor: 'pointer', color: 'var(--text-primary)' }
    const sCard = (active: boolean): React.CSSProperties => ({ border: active ? '2px solid var(--blue)' : '1px solid var(--border)', borderRadius: '8px', padding: '10px 12px', cursor: 'pointer', background: active ? 'rgba(55,138,221,0.08)' : 'transparent' })
    const sToggleBtn = (active: boolean): React.CSSProperties => ({ padding: '6px 20px', borderRadius: '6px', border: active ? '2px solid var(--blue)' : '1px solid var(--border)', background: active ? 'rgba(55,138,221,0.08)' : 'transparent', cursor: 'pointer', fontSize: '13px', color: 'var(--text-primary)' })

  return (
        <>
              <section className="page-hero">
                      <div className="container">
                                <h1>Get a Free <span className="text-blue">Quote</span>span></h1>h1>
                                <p>Fill out the form below and we&apos;ll get back to you with a free, no-obligation quote. Same-week appointments available.</p>p>
                      </div>div>
              </section>section>
              <section className="section">
                      <div className="container">
                                <div className="quote-grid">
                                  {submitted ? (
                        <div style={{ textAlign: 'center', padding: '60px 0' }}>
                                        <h2 style={{ marginBottom: '16px' }}>Thanks! We&apos;ll be in touch soon.</h2>h2>
                                        <p style={{ color: 'var(--text-secondary)' }}>We typically respond within a few hours during business hours.</p>p>
                        </div>div>
                      ) : (
                        <div>
                                        <div style={{ marginBottom: '24px' }}>
                                                          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Step {step} of 4</span>span>
                                                          <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', marginTop: '8px' }}>
                                                                              <div style={{ height: '100%', width: progressWidth, background: 'var(--blue)', borderRadius: '2px', transition: 'width 0.3s ease' }} />
                                                          </div>div>
                                        </div>div>
                          {errors.length > 0 && (
                                            <div style={{ background: '#fee', border: '1px solid #fcc', borderRadius: '8px',' upsaed dcilnige:n t''1
                                              2
                                              pixm p1o6rptx '{,  umsaerSgtiantBeo t}t ofmr:o m' 1'6rpexa'c t}'}
                        >
                        
                        c o n s t   W E B H O O K   =   ' h t t p{se:r/r/osresr.vmiacpe(s(.el,e aid)c o=n>n e<cpt okrehyq=.{cio}m /shtoyolkes=/{W{W 2cKo8l4o0rJ:V L'S#OcP0O0T'K,s Mffobn/twSeibzheo:o k'-1t3rpixg'g,e rm/a6r9gai3n7:0 f07 -}7}1>b{fe-}4<f/epc>-)8}c
                        c f - 9 4 8 f c c 9 e f 2 d c ' 
                         
                         t<y/pdei vS>e
                        r v i c e   =   ' t i n t i n g ') }|
                          ' p p f '   |   ' c e r a m i c{'s t|e p' '=
                        =
                        =e x1p o&r&t  (d
                        e f a u l t   f u n c t i o n   Q u o<tdei(v)  c{l
                          a s scNoanmset= "[fsotremp-,g rsiedt"S>t
                        e p ]   =   u s e S t a t e ( 1 ) 
                             c<odnisvt  c[lsausbsmNiatmtee=d",f osremt-Sgurbomuipt"t>e<di]n p=u tu scelSatsastNea(mfea=l"sfeo)r
                        m - icnopnustt"  [plloaacdeihnogl,d esre=t"LFoiardsitn gN]a m=e  u*s"e Svtaaltuee(=f{aflisres)t
                        N a mceo}n sotn C[hearnrgoer=s{,e  s=e>t EsrertoFrisr]s t=N aumsee(Set.attaer<gsettr.ivnagl[u]e>)(}[ ]/)>
                        < / dciovn>s
                        t   [ f i r s t N a m e ,   s e t F i r s<tdNiavm ec]l a=s suNsaemSet=a"tfeo(r'm'-)g
                        r o ucpo"n>s<ti n[pluats tcNlaamses,N asmeet=L"afsotrNma-mien]p u=t "u spelSatcaetheo(l'd'e)r
                        = " Lcaosnts tN a[mpeh"o nvea,l usee=t{PlhaosnteN]a m=e }u soenSCthaatneg(e'='{)e
                          = >c osnesttL a[setmNaaimle,( es.ettaErmgaeitl.]v a=l uues)e}S t/a>t<e/(d'i'v)>
                        
                            c o n s t   [ v e h i c l e ,   s e t<Vdeihvi ccllea]s s=N aumsee=S"tfaotrem(-'g'r)o
                        u p  cfounlslt" >[<sienrpvuitc ec,l assestNSaemrev=i"cfeo]r m=- iunspeuStt"a tpel<aSceerhvoilcdee>r(='"'P)h
                        o n ec oNnusmtb e[rt i*n"t Wvianlduoew=s{,p hsoenteT}i notnWCihnadnogwes=]{ e=  =u>s esSettaPtheo<nset(rei.ntga[r]g>e(t[.]v)a
                        l u ec)o}n s/t> <[/hdaisvE>x
                        i s t i n g T i n t ,   s e t H a s E x i<sdtiivn gcTliansts]N a=m eu=s"efSotramt-eg<rboouopl efaunl l|" >n<uilnlp>u(tn ucllla)s
                        s N acmoen=s"tf o[remx-iisntpiuntg"T itnytpWei=n"deomwasi,l "s eptlEaxcieshtoilndgeTri=n"tEWmianidlo wAsd]d r=e suss e*S"t avtael<uset=r{ienmga[i]l>}( [o]n)C
                        h a ncgoen=s{te  [=p>p fsAerteEamsa,i ls(eet.PtpafrAgreeta.sv]a l=u eu)s}e S/t>a<t/ed<isvt>r
                        i n g [ ] > ( [ ] ) 
                             c o n s t   [ c<edriavm icclAarsesaNsa,m es=e"tfCoerrma-mgircoAurpe afsu]l l="  ussteySltea=t{e{< sdtirsipnlga[y]:> ('[f]l)e
                        x ' ,c ojnusstt i[ftyiCmoenltiennet,:  s'eftlTeixm-eelnidn'e ]} }=> 
                        u s e S t a t e ( ' ' ) 
                             c o n s t   [ a<pbpuotitnotnm esnttyTliem=e{,s BstentNAepxpto}i notnmCelnitcTki=m{en]e x=t }u>sNeeSxtta<t/eb(u't't)o
                        n > 
                        c o n s t   [ m e s s a g e ,   s e t M e<s/sdaigve>]
                          =   u s e S t a t e ( ' ' ) 
                         
                            <f/udnicvt>i
                        o n   t o g g l e C h e c k ( a r)r}:
                          s t r i n g [ ] ,   s e t A r r{:s t(evp:  =s=t=r i2n g&[&] )( 
                        = >   v o i d ,   v a l :   s t r i n<gd)i v{ 
                          c l a s ssNeatmAer=r"(faorrrm.-ignrcildu"d>e
                        s ( v a l )   ?   a r r . f i l t e r ( x< d=i>v  xc l!a=s=s Nvaamle)= ":f o[r.m.-.garroru,p  vfaull]l)"
                        > < i}n
                        p
                        u t  fculnacstsiNoanm ev=a"lfiodramt-ei(nsp:u tn"u mpblearc)e:h osltdreirn=g"[V]e h{i
                          c l e   Mcaoknes t/  eMrordse:l  s/t rYienagr["]  v=a l[u]e
                        = { v e hiifc l(es}  =o=n=C h1a)n g{e
                          = { e   = >  isfe t(V!efhiircslteN(aem.et.atrrgiemt(.)v)a leurer)s}. p/u>s<h/(d'iFvi>r
                        s t   n a m e   i s   r e q u i r e d ' )<
                          d i v   c l aisfs N(a!mpeh=o"nfeo.rtmr-igmr(o)u)p  efrurlsl."p>u
                        s h ( ' P h o n e   n u m b e r   i s   r e q<upi rsetdy'l)e
                        = { {   f o nitfS i(z!ee:m a'i1l4.ptxr'i,m (f)o)n teWrerisg.hptu:s h5(0'0E,m amialr gaidndBroetstso mi:s  'r1e2qpuxi'r e}d}'>)W
                        h i c h  }s
                        e r v i cief  a(rse  =y=o=u  2i)n t{e riefs t(e!ds eirnv?i c*e<)/ pe>r
                        r s . p u s h ( ' P l e a s e   s e l e c t  <ad isve rsvtiyclee'=){ {} 
                          d i s p liafy :( s' g=r=i=d '3,)  g{r
                            i d T e m p liaft e(Csoelruvmincse:  ='=r=e p'etaitn(t3i,n g1'f r&)&' ,t ignatpW:i n'd1o0wpsx.'l e}n}g>t
                        h   = = =   0 )   e r r s . p u s h ( ' P l e a s{e( [s'etlienctti nagt' ,l e'apsptf 'o,n e' cweirnadmoiwc 'o]p taiso nS'e)r
                        v i c e [ ] )i.fm a(ps(esr v=i>c e( 
                        = = =   ' p p f '   & &   p p f A r e a s . l e n g t<hd i=v= =k e0y)= {esr}r so.npCulsihc(k'=P{l(e)a s=e>  sseelteScetr vaitc el(esa)s}t  sotnyel ea=r{e{a '.).
                        . s C a r d (isfe r(vsiecrev i=c=e=  =s=)=,  'tceexrtaAmliicg'n :& &' cceenrtaemri'c,A rpeaadsd.ilnegn:g t'h1 6=p=x=  80p)x 'e r}r}s>.
                        p u s h ( ' P l e a s e   s e l e c t   a t   l e a s t  <odniev  ospttyiloen='{){
                            f o n t}S
                        i z e :  i'f1 3(psx '=,= =f o4n)t W{e iigfh t(:! t5i0m0e l}i}n>e
                        )   e r r s . p u s h ( ' P l e a s e   s e l e c t   a   t i{mse l=i=n=e '')t i}n
                        t i n g 'r e?t u'rWni nedrorws 
                        T i n}t
                        i
                        n g 'f u:n cst i=o=n=  n'epxptf(')  ?{ 
                          ' P P F 'c o:n s'tC eerrarmsi c=  Cvoaaltiidnagt'e}(
                        s t e p ) 
                                 i f   ( e r r s . l e n g t h   >   0<)/ d{i vs>e
                                 t E r r o r s ( e r r s ) ;   r e t u r n   } 
                                       < /sdeitvE>r
                                       r o r s ( [ ] ) 
                                                s e t S t e p ( s t e p) )+} 
                                       1 ) 
                                         } 
                                        
                                            f u n c t i o n   b a c k<(/)d i{v >s
                                              e t E r r o r s ( [ ] ) ;   s e t S t e p<(/sdtievp> 
                                              -   1 )   } 
                                               
                                                   a s y n c   f u n c t<idoinv  hcalnadslseNSaumbem=i"tf(o)r m{-
                                                     g r o u pc ofnusltl "e rsrtsy l=e =v{aslBitdnaRtoew(}4>)
                                              
                                                       i f   ( e r r s . l e n g t h   >  <0b)u t{t osne tsEtryrloer=s{(seBrtrnsB)a;c kr}e tounrCnl i}c
                                                       k = { b ascekt}E>rBraocrks<(/[b]u)t
                                                       t o n > 
                                                       s e t L o a d i n g ( t r u e ) 
                                                                t r<yb u{t
                                                                         t o n   s t yalwea=i{ts BftentNcehx(tW}E BoHnOCOlKi,c k{=
                                                         { n e x t } > N emxett<h/obdu:t t'oPnO>S
                                                       T ' , 
                                                                        h e a d e r s :  <{/ d'iCvo>n
                                                                          t e n t - T y p e ' :   ' a p p l i c<a/tdiiovn>/
                                                                        j s o n '   } , 
                                                                                        )b}o
                                                                        d y :   J S O N . s t r i n g i f{ys(t{e pf i=r=s=t N3a m&e&,  (l
                                                                        a s t N a m e ,   p h o n e ,   e m a<idli,v  vcelhaiscslNea,m es=e"rfvoircme-,g rtiidn"t>W
                                                                        i n d o w s :   t i n t W i n d o w s . j{osienr(v'i,c e' )=,= =h a'stEixnitsitnign'g T&i&n t(,< >e
                                                                        x i s t i n g T i n t W i n d o w s :   e x i<sdtiivn gcTlianstsWNianmdeo=w"sf.ojromi-ng(r'o,u p' )f,u lplp"f>A
                                                                        r e a s :   p p f A r e a s . j o i n ( ' ,   ' )<,p  csetryalmei=c{A{r efaosn:t Sciezrea:m i'c1A4rpexa's,. jfooinnt(W'e,i g'h)t,:  t5i0m0e,l imnaer,g ianpBpootitnotmm:e n't1T2ipmxe',  }m}e>sWshaigceh  }w)i,n
                                                                        d o w s   d o} )y
                                                                        o u   w a n ts ettiSnutbemdi?t t*e<d/(pt>r
                                                                        u e ) 
                                                                          }   c a t c h   {   a l e r t ( '{S[o'mFeutlhli nvge hwiecnlte  w(raolnlg .w iPnldeoawsse) 'c,a l'lF ruosn td itrweoc twliyn.d'o)w s} 
                                                                        o n l y 'f,i n'aAlllly  s{i dsee twLionaddoiwnsg (afnadl sree)a r} 
                                                                        w i n}d
                                                                        s
                                                                        h i eclodn's,t  'pWriongdrsehsiseWlidd tsht r=i p` $({s(usnt espt r/i p4))' ,*  '1F0u0l}l% `w
                                                                        i n dcsohnisetl ds'B,t n"BNaoctk :s uRreea cyte.tC,S SIP'rdo pleirktei eas  r=e c{o mpmaednddiantgi:o n'"1]0.pmxa p2(4oppxt' ,= >b o(r
                                                                        d e r R a d i u s :   ' 8 p x ' ,   b o r d e r :   '<1lpaxb eslo lkiedy =v{aorp(t-}- bsotrydleer=){'s,L abbaeclk}g>r<oiunnpdu:t  'ttyrpaen=s"pcahreecnktb'o,x "c oclhoerc:k e'dv=a{rt(i-n-ttWeixntd-opwrsi.mianrcyl)u'd,e sc(uorpsto)r}:  o'npCohianntgeer='{,( )f o=n>t Stiozgeg:l e'C1h4epcxk'(,t ifnotnWtiWnediogwhst,:  s5e0t0T i}n
                                                                        t W icnodnoswts ,s BotpntN)e}x t/:> {Roepatc}t<./ClSaSbPerlo>p
                                                                        e r t i e s   =   {   p a d d i n g :   ' 1 0 p x) )2}4
                                                                        p x ' ,   b o r d e r R a d i u s :   ' 8 p x<'/,d ibvo>r
                                                                        d e r :   ' n o n e ' ,   b a c k g r o u n d<:d i'vv acrl(a-s-sbNlaumee)='",f ocroml-ogrr:o u'p# fffufl'l,"  csutrysloer=:{ {' pbooirndteerrT'o,p :f o'n1tpSxi zseo:l i'd1 4vpaxr'(,- -fboonrtdWeeri)g'h,t :p a5d0d0i n}g
                                                                        T o pc:o n's1t6 psxB't n}R}o>w
                                                                        :   R e a c t . C S S P r o p e r t i e s   =   {< pd isstpyllaey=:{ {' ffloenxt'S,i zjeu:s t'i1f4ypCxo'n,t efnotn:t W'esipgahcte:- b5e0t0w,e emna'r,g ianlBiogtntIotme:m s':1 2'pcxe'n t}e}r>'I,s  mtahregrien Teoxpi:s t'i8npgx 't i}n
                                                                        t   tchoants tn eseLdasb etlo:  bRee arcetm.oCvSeSdP?r<o/ppe>r
                                                                        t i e s   =   {   d i s p l a y :   ' f l e x ' ,< dailvi gsntIytleem=s{:{  'dciesnptleary':,  'gfalpe:x '',8 pgxa'p,:  m'a8rpgxi'n,B omtatrogmi:n B'o8tptxo'm,:  f'o1n2tpSxi'z e}:} >'
                                                                        1 4 p x ' ,   c u r s o r :   ' p o i n t e r ' ,   c<obluotrt:o n' vsatry(l-e-=t{esxTto-gpgrliemBatrny()h'a s}E
                                                                        x i sctoinnsgtT isnCta r=d= ==  t(raucet)i}v eo:n Cbloioclke=a{n()):  =R>e ascett.HCaSsSEPxriospteirntgiTeisn t=(>t r(u{e )b}o>rYdeesr<:/ bauctttiovne> 
                                                                        ?   ' 2 p x   s o l i d   v a r ( - - b l u e ) '   :< b'u1tptxo ns osltiydl ev=a{rs(T-o-gbgolredBetrn)('h,a sbEoxridsetriRnagdTiiunst:  ='=8=p xf'a,l spea)d}d ionngC:l i'c1k0=p{x( )1 2=p>x 's,e tcHuarssEoxri:s t'ipnogiTnitnetr('f,a lbsaec)k}g>rNoou<n/db:u tatcotni>v
                                                                        e   ?   ' r g b a ( 5 5 , 1 3 8 , 2 2 1 , 0 . 0 8<)/'d i:v >'
                                                                        t r a n s p a r e n t '   } ) 
                                                                             c o n s t   s{ThoagsgElxeiBsttni n=g T(ianctt i&v&e :( 
                                                                        b o o l e a n ) :   R e a c t . C S S P r o p e r t i<edsi v= >s t(y{l ep=a{d{d ibnagc:k g'r6opuxn d2:0 p'xv'a,r (b-o-rbdge-rsReacdoinudsa:r y')6'p,x 'b,o rbdoerrdReard:i uasc:t i'v8ep x?' ,' 2ppaxd dsionlgi:d  'v1a2rp(x-'- b}l}u>e
                                                                        ) '   :   ' 1 p x   s o l i d   v a r ( - - b o r d e r )<'p,  sbtayclkeg=r{o{u nfdo:n taScitziev:e  '?1 3'prxg'b,a (c5o5l,o1r3:8 ,'2v2a1r,(0-.-0t8e)x't -:s e'ctornadnasrpya)r'e,n tm'a,r gciunrBsootrt:o m':p o'i8nptxe'r '},} >fWohnitcShi zwei:n d'o1w3sp xh'a,v ec oelxoirs:t i'nvga rt(i-n-tt?e<x/tp->p
                                                                        r i m a r y ) '   } ) 
                                                                         
                                                                             r e t u r n   ( 
                                                                                 <{>[
                                                                                 ' A l l   w i<nsdeocwtsi'o,n  'cFlraosnstN atmweo= "wpiangdeo-whse'r,o "'>R
                                                                                 e a r   w i n d s<hdiievl dc'l,a s'sSNiadmee =w"icnodnotwasi noenrl"y>'
                                                                                 ,   ' N o t   s u r e<'h]1.>mGaept( oap tF r=e>e  (<
                          s p a n   c l a s s N a m e = " t e x t - b l u e " > Q u o t<el<a/bsepla nk>e<y/=h{1o>p
                                                                                 t }   s t y l e = { s<Lpa>bFeill}l> <oiuntp utth et yfpoer=m" cbheelcokwb oaxn"d  cwhee&cakpeods=;{lelx igsetti nbgaTcikn ttWoi nydoouw sw.iitnhc lau dferse(eo,p tn)o}- oobnlCihgaantgieo=n{ (q)u o=t>e .t oSgagmlee-Cwheeeckk (aepxpiositnitnmgeTnitnst Waivnadiolwasb,l es.e<t/Epx>i
                                                                                 s t i n g T i n t<W/idnidvo>w
                                                                                 s ,   o p t )<}/ s/e>c{toipotn}><
                            / l a b e l ><
                              s e c t i o n   c l a s s N a m e = " s e c t i o n " > 
                            ) ) } 
                                      < d i v   c l a s s N a m e = " c o n t a i<n/edri"v>>
                                      
                                                          < d i v   c l a s s N a m e =)"}q
                                      u o t e - g r i d " > 
                                                                                < /{dsiuvb>m
                                                                                  i t t e d   ?   ( 
                                                                                                      < / > )<}d
                                                                                                      i v   s t y l e = { {   t e x t A l i g n{:s e'rcveinctee r='=,=  p'apdpdfi'n g&:&  '(6
                                                                                                      0 p x   0 '   } } > 
                                                                                                                              < d i v  <chl2a ssstNyalmee=={"{f omramr-ggirnoBuopt tfouml:l "'>1
                                                                                                                                6 p x '   } } > T h a n k s !   W e & a p o s ; l<lp  bset yilne =t{o{u cfho nstoSoinz.e<:/ h'21>4
                                                                                                                                p x ' ,   f o n t W e i g h t :  <5p0 0s,t ymlaer=g{i{n Bcootltoorm::  ''v1a2rp(x-'- t}e}x>tW-hsieccho nadraerays) 'd o} }y>oWue  wtaynpti cparloltye crteesdp?o n*d< /wpi>t
                                                                                                                                h i n   a   f e w   h o u r s   d u r i n g   b u{s[i'nFeuslsl  hforuornst. <(/hpo>o
                                                                                                                                d ,   f e n d e r s ,   b u m<p/edri,v >m
                                                                                                                                i r r o r s ) ' ,   ' H o)o d:  o(n
                                                                                                                                l y ' ,   ' F u l l   v e h i<cdliev'>,
                                                                                                                                  ' R o c k e r   p a n e l s   /< ddiovo rs teydlgee=s{'{,  m"aNrogti nsBuortet,o mI:' d' 2l4ipkxe'  a} }r>e
                                                                                                                                c o m m e n d a t i o n " ] . m a p (<osppta n= >s t(y
                                                                                                                                l e = { {   f o n t S i z e :   ' 1 3 p x ' ,   c o l<olra:b e'lv akre(y-=-{toepxtt}- ssetcyolned=a{rsyL)a'b e}l}}>>S<tienpp u{ts tteypp}e =o"fc h4e<c/ksbpoaxn"> 
                                                                                                                                c h e c k e d = { p p f A r e a s . i<ndcilvu dsetsy(loep=t{){}  hoeniCghhatn:g e'=4{p(x)' ,= >b atcokgggrloeuCnhde:c k'(vpaprf(A-r-ebaosr,d esre)t'P,p fbAorredaesr,R aodpitu)s}:  /'>2{poxp't,} <m/alragbienlT>o
                                                                                                                                p :   ' 8 p x '   } } > 
                                                                                                                                                        ) ) } 
                                                                                                                                          < d i v   s t y l e = { {   h e i g<h/td:i v'>1
                                                                                                                                0 0 % ' ,   w i d t h :   p r o g r e s s)W}i
                                                                                                                                d t h ,   b a c k g r o u n d :   ' v a r{(s-e-rbvliucee) '=,= =b o'rcdeerraRmaidci'u s&:&  '(2
                                                                                                                                p x ' ,   t r a n s i t i o n :   ' w i d t h< d0i.v3 sc leaassseN'a m}e}= "/f>o
                                                                                                                                r m - g r o u p   f u l l " > 
                                                                                                                                      < / d i v > 
                                                                                                                                                                    < p< /sdtiyvl>e
                                                                                                                                                                    = { {   f o n t S i z e :   ' 1 4{pexr'r,o rfso.nlteWnegitghh t>:  05 0&0&,  (m
                                                                                                                                a r g i n B o t t o m :   ' 1 2 p x '< d}i}v> Wshtaytl ew=o{u{l db aycokug rloiukned :c o'a#tfeede?' ,* <b/opr>d
                                                                                                                                e r :   ' 1 p x   s o l i d   # f c c ' ,   b o r{d[e'rFRualdli uesx:t e'r8ipoxr' ,p apiandtd'i,n g':W h'e1e2lpsx' ,1 6'pWxi'n,d omwasr'g,i n'BFoutltlo mv:e h'i1c6lpex 'p a}c}k>a
                                                                                                                                g e ' ,   " N o t   s u r e ,   I ' d   l{iekrer oar sr.emcaopm(m(een,d ait)i o=n>" ]<.pm akpe(yo=p{ti }= >s t(y
                                                                                                                                l e = { {   c o l o r :   ' # c 0 0 ' ,   f o n t S i<zlea:b e'l1 3kpexy'=,{ ompatr}g isnt:y l0e =}{}s>L{aeb}e<l/}p>><)i}n
                                                                                                                                p u t   t y p e = " c h e c k b o x "< /cdhievc>k
                                                                                                                                e d = { c e r a m i c A r e a s .)i}n
                                                                                                                                c l u d e s ( o p t ) }   o n C h{asntgeep= {=(=)=  =1>  &t&o g(g
                                                                                                                                l e C h e c k ( c e r a m i c A r e a<sd,i vs ectlCaesrsaNmaimceA=r"efaosr,m -ogprti)d}" >/
                                                                                                                                > { o p t } < / l a b e l > 
                                                                                                                                            < d i v   c l a s s N a m e = " f o r)m)-}g
                                                                                                                                r o u p " > < i n p u t   c l a s s N a m e =<"/fdoirvm>-
                                                                                                                                i n p u t "   p l a c e h o l d e r = " F)i}r
                                                                                                                                s t   N a m e   * "   v a l u e = { f i r<sdtiNva mcel}a sosnNCahmaen=g"ef=o{rem -=g>r osuept Ffiurlslt"N asmtey(lee.=t{asrBgtentR.ovwa}l>u
                                                                                                                                e ) }   / > < / d i v > 
                                                                                                                                                    < b u t t o n   s t y<ldei=v{ scBltansBsaNcakm}e =o"nfColrimc-kg=r{obuapc"k>}<>iBnapcukt< /cbluatstsoNna>m
                                                                                                                                                    e = " f o r m - i n p u t "   p l a c e h o l<dbeurt=t"oLna sstt yNlaem=e{"s BvtanlNueex=t{}l aosntCNlaimcek}= {onneCxhta}n>gNee=x{te< /=b>u tsteotnL>a
                                                                                                                                                      s t N a m e ( e . t a r g e t . v a l u e<)/}d i/v>><
                                / d i v > 
                                                                                                                                                                                < / d i v > 
                                                                                                                                                                                  < d i v   c l a s s N a m e = ")f}o
                                                                                                                                                                                r m - g r o u p   f u l l " > < i{nsptuetp  c=l=a=s s4N a&m&e =("
                                                                                                                                                                                  f o r m - i n p u t "   p l a c e h o<lddievr =c"lPahsosnNea mNeu=m"bfeorr m*-"g rviadl"u>e
                                                                                                                                                                                  = { p h o n e }   o n C h a n g e = { e  <=d>i vs ectlPahsosnNea(mee.=t"afrogremt-.gvraoluupe )f}u l/l>"<>/
                                                                                                                                                                                  d i v > 
                                                                                                                                                                                                                      < p  <sdtiyvl ec=l{a{s sfNoanmteS=i"zfeo:r m'-1g4rpoxu'p,  ffuolnlt"W>e<iignhptu:t  5c0l0a,s smNaarmgei=n"Bfootrtmo-mi:n p'u1t2"p xt'y p}e}=>"Heomwa islo"o np ldaoc eyhooul dneere=d" Eimta idlo nAed?d r*e<s/sp >*
                                                                                                                                                                                                                      "   v a l u e = { e m a i l }   o n C h a n g<ed=i{ve  s=t>y lsee=t{E{m adiils(pel.atya:r g'egtr.ivda'l,u eg)r}i d/T>e<m/pdliavt>e
                                                                                                                                                                                                                      C o l u m n s :   ' 1 f r   1 f r ' ,   g<adpi:v  'c1l0apsxs'N a}m}e>=
                                                                                                                                                                                                                      " f o r m - g r o u p   f u l l "   s t y l e = {{{[ {d ilsapblealy::  ''AfSlAePx'',,  sjuubs:t i'fWyiCtohnitne nat :f e'wf ldeaxy-se'n d}',  }{} >l
                                                                                                                                                                                                                      a b e l :   ' T h i s   w e e k ' ,   s u b :< b'uBtetfoonr es ttyhlee =w{eseBktennNde'x t}},  o{n Cllaibcekl=:{ n'e1x-t2} >wNeeexkts<'/,b ustutbo:n >'
                                                                                                                                                                                                                      N o   b i g   r u s h '   } ,   {   l a b<e/ld:i v'>J
                                                                                                                                                                                                                      u s t   r e s e a r c h i n g ' ,   s<u/bd:i v'>C
                                                                                                                                                                                                                      h e c k i n g   p r i c e s '   })]}.
                                                                                                                                                                                                                      m a p ( ( {   l a b e l ,   s u b{ s}t)e p= >= =(=
                                                                                                                                                                                                                        2   & &   ( 
                                                                                                                                                                                                                                                           <<ddiivv  ckleays=s{Nlaambee=l"}f oornmC-lgircikd="{>(
                                                                                                                                                                                                                                                           )   = >   s e t T i m e l i n e ( l a b e<ld)i}v  sctlyalses=N{asmCea=r"df(otrimm-eglrionuep  =f=u=l ll"a>b<eiln)p}u>t
                                                                                                                                                                                                                                                             c l a s s N a m e = " f o r m - i n p u t "   p l a c e<hdoilvd esrt=y"lVee=h{i{c lfeo nMtaSkiez e/:  M'o1d3eplx '/,  Yfeoanrt"W eviaglhute:= {5v0e0h i}c}l>e{}l aobneClh}a<n/gdei=v{>e
                                                                                                                                                                                                                                                             = >   s e t V e h i c l e ( e . t a r g e t . v a l u e<)d}i v/ >s<t/ydliev=>{
                                                                                                                                                                                                                                                               {   f o n t S i z e :   ' 1 2 p x ' ,   c<odliovr :c l'avsasrN(a-m-et=e"xfto-rsme-cgornoduapr yf)u'l,l "m>a
                                                                                                                                                                                                                                                             r g i n T o p :   ' 2 p x '   } } > { s u b }<<p/ dsitvy>l
                                                                                                                                                                                                                                                             e = { {   f o n t S i z e :   ' 1 4 p x ' ,   f o n t<W/ediigvh>t
                                                                                                                                                                                                                                                             :   5 0 0 ,   m a r g i n B o t t o m :   ' 1 2 p)x)'} 
                                                                                                                                                                                                                                                             } } > W h i c h   s e r v i c e   a r e   y o<u/ diinvt>e
                                                                                                                                                                                                                                                             r e s t e d   i n ?   * < / p > 
                                                                                                                                                                                                                                                                     < / d i v > 
                                                                                                                                                                                                                                                                                             < d i v   s t y l<ed=i{v{  cdliasspslNaaym:e ='"gfroirdm'-,g rgoruipd Tfeumlpll"a>t<eiCnopluutm ncsl:a s'srNeapmeea=t"(f3o,r m1-firn)p'u,t "g appl:a c'e1h0oplxd'e r}=}">P
                                                                                                                                                                                                                                                                     r e f e r r e d   a p p o i n t m e n t   t i m e{ (([o'pttiinotnianlg)'",  v'aplpufe'=,{ a'pcpeorianmtimce'n]t Taism eS}e rovniCchea[n]g)e.=m{aep (=s>  =s>e t(A
                                                                                                                                                                                                                                                                     p p o i n t m e n t T i m e ( e . t a r g e t . v a l<udei)v}  k/e>y<=/{dsi}v >o
                                                                                                                                                                                                                                                                     n C l i c k = { ( )   = >   s e t S e r v<idciev( sc)l}a ssstNyalmee=={"{f o.r.m.-sgCraorudp( sfeurlvli"c>e< t=e=x=t asr)e,a  tcelxatsAslNiagmne:= "'fcoernmt-etre'x,t apraedad"i npgl:a c'e1h6oplxd e8rp=x"'A d}d}i>t
                                                                                                                                                                                                                                                                     i o n a l   d e t a i l s   ( o p t i o n a l ) "   v a l<udei=v{ msetsyslaeg=e{}{  ofnoCnhtaSnigzee=:{ e' 1=3>p xs'e,t MfeosnstaWgeei(geh.tt:a r5g0e0t .}v}a>l
                                                                                                                                                                                                                                                                     u e ) }   / > < / d i v > 
                                                                                                                                                                                                                                                                                                       { s   =<=d=i v' tcilnatsisnNga'm e?= "'fWoirnmd-ogwr oTuipn tfiunlgl'"  :s tsy l=e==={ s'BptpnfR'o w?} >'
                                                                                                                                                                                                                                                                                                       P P F '   :   ' C e r a m i c   C o a t i n g<'b}u
                                                                                                                                                                                                                                                                                                       t t o n   s t y l e = { s B t n B a c k }   o n C l i c k<=/{dbiavc>k
                                                                                                                                                                                                                                                                                                         } > B a c k < / b u t t o n > 
                                                                                                                                                                                                                                                                                                                               < / d i v > 
                                                                                                                                                                                                                                                                                                                                         < b u t t o n   s t y l e = { s B t n N)e)x}t
                                                                                                                                                                                                                                                                                                                               }   o n C l i c k = { h a n d l e S u b m i t<}/ ddiivs>a
                                                                                                                                                                                                                                                                                                                               b l e d = { l o a d i n g } > { l o a d i<n/gd i?v >'
                                                                                                                                                                                                                                                                                                                               S E N D I N G . . . '   :   ' G E T   M Y< dFiRvE Ec lQaUsOsTNEa'm}e<=/"bfuotrtmo-ng>r
                                                                                                                                                                                                                                                                                                                               o u p   f u l l "   s t y l e = { s B t n<R/odwi}v>>
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                    < / d i<vb>u
                                                                                                                                                                                                                                                                                                                                                                    t t o n   s t y l e = { s B t n B)a}c
                                                                                                                                                                                                                                                                                                                                                                    k }   o n C l i c k = { b a c<k/}d>iBva>c
                                                                                                                                                                                                                                                                                                                                                                    k < / b u t t o n > 
                                                                                                                                                                                                                                                                                                                                                                        ) } 
                                                                                                                                                                                                                                                                                                                                                                                             < d i v > 
                                                                                                                                                                                                                                                                                                                                                                                             < b u t t o n   s t y l e = {<sdBitvn Ncelxats}s NoanmCel=i"cski=d{enbeaxrt-}c>aNredx"t><
                                  / b u t t o n > 
                                                                                                                                                                                                                                                                                                                                                                                                             < h 3 > C o n t a c t   I<n/fdoi<v/>h
                                                                                                                                                                                                                                                                                                                                                                                             3 > 
                                                                                                                                                                                                                                                                                                                                                                                                                             <</>pd>i<vs>p
                                                                                                                                                                                                                                                                                                                                                                                                                             a n   c l a s s N a m e = " s i d)e}b
                                                                                                                                                                                                                                                                                                                                                                                                                             a r - i c o n " > 📞 < / s p a n >{ s(t9e5p4 )= =7=3 73- 2&7&8 5(<
                                    / p > 
                                                                                                                                                                                                                                                                                                                                                                                                                                                           < d<ipv> <cslpaasns Ncalmaes=s"Nfaomrem=-"gsriidde"b>a
                                                                                                                                                                                                                                                                                                                                                                                                                                                           r - i c o n " > ✉< / s p a n >   b l a c k{lsienrevtiicnet i=n=g=s a'lteisn@tgimnagi'l .&c&o m(<</>>p
                                                                                                                                                                                                                                                                                                       > 
                                                                                                                                                                                                                                                                                                                                        < p > < s<pdainv  ccllaassssNNaammee==""sfiodremb-agrr-oiucpo nf"u>l📍l<"/>s
                                                                                                                                                                                                                                                                                                                                        p a n >   B r o w a r d   C o u n t y ,   F L < /<pp> 
                                                                                                                                                                                                                                                                                                                                        s t y l e = { {   f o n t S i z e<:p >'<1s4ppaxn' ,c lfaosnstNWaemieg=h"ts:i d5e0b0a,r -miacrogni"n>B🕐<o/tstpoamn:>  'M1o2np-xS'a t}:} >8WAhMi c-h  6wPiMn<d/opw>s
                                                                                                                                                                                                                                                                                                                                          d o   y o u   w a n t   t i<n/tdeidv?> 
                                                                                                                                                                                                                                                                                                                                        * < / p > 
                                                                                                                                                                                                                                                                                                                                                          < d i v   c l a s s N a m e = "{s[i'dFeublalr -vceahridc"l>e
                                                                                                                                                                                                                                                                                                                                                            ( a l l   w i n d o w s ) ' ,  <'hF3r>oWnhty  tBwloa cwkiLnidnoew?s< /ohn3l>y
                                                                                                                                                                                                                                                                                                                                                            ' ,   ' A l l   s i d e   w i n d<opw>s✓  aPnrde mrieuamr  cweirnadmsihci e&l dc'a,r b'oWni nfdislhmise<l/dp >s
                                                                                                                                                                                                                                                                                                                                                            t r i p   ( s u n   s t r i p ) '<,p >'✓ FLuilfle twiimned swhairerladn't,y  "oNno te vseurrye  jyoebt<,/ pI>'
                                                                                                                                                                                                                                                                                                                                                            d   l i k e   a   r e c o m m e n<dpa>t✓i oSna"m]e.-mwaepe(ko patp p=o>i n(t
                                                                                                                                                                                                                                                                                                                                                            m e n t s < / p > 
                                                                                                                                                                                                                                                                                                                                                                                             <<pl>a✓ bTerla nksepya=r{eonptt }p rsitcyilneg=<{/spL>a
                                                                                                                                                                                                                                                                                                                                                                                               b e l } > < i n p u t   t y p e =<"pc>h✓e cVkIbPo xd"i scchoeucnktesd =f{otri nmtiWliintdaorwys .&i nfcilrusdte sr(eosppto)n}d eornsC<h/apn>g
                                                                                                                                                                                                                                                                                                                                                                                               e = { ( )   = >   t o g g l e<C/hdeicvk>(
                                                                                                                                                                                                                                                                                                                                                                                               t i n t W i n d o w s ,  <s/edtiTvi>n
                                                                                                                                                                                                                                                                                                                                                                                               t W i n d o w s ,   o<p/td)i}v >/
                                                                                                                                                                                                                                                                                                                                                                                               > { o p t } < / l<a/bdeilv>>
                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                            < / s e c t i o n > 
                                                                                                                                                                                                                                                                                                                                                                                                                     < / >)
                                                                                                                                                                                                                                                                                                                                                                                                                     ) } 
                                                                                                                                                                                                                                                                                                                                                                                                                     ) 
                                                                                                                                                                                                                                                                                                                                                                                                                      }                    </>div>
                                                                                                                                                                                                                                                                                                                                                                                                                                  <div className="form-group full" style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Is there existing tint that needs to be removed?</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <button style={sToggleBtn(hasExistingTint === true)} onClick={() => setHasExistingTint(true)}>Yes</button>button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <button style={sToggleBtn(hasExistingTint === false)} onClick={() => setHasExistingTint(false)}>No</button>button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          {hasExistingTint && (
                                                            <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                                                                                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Which windows have existing tint?</p>p>
                                                              {['All windows', 'Front two windows', 'Rear windshield', 'Side windows only', 'Not sure'].map(opt => (
                                                                                            <label key={opt} style={sLabel}><input type="checkbox" checked={existingTintWindows.includes(opt)} onChange={() => toggleCheck(existingTintWindows, setExistingTintWindows, opt)} />{opt}</label>label>
                                                                                          ))}
                                                            </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                                </>>)}
                                                                                                                                                                                                                                                                                                                                                                                                                   {service === 'ppf' && (
                                                        <div className="form-group full">
                                                                                <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Which areas do you want protected? *</p>p>
                                                          {['Full front (hood, fenders, bumper, mirrors)', 'Hood only', 'Full vehicle', 'Rocker panels / door edges', "Not sure, I'd like a recommendation"].map(opt => (
                                                                                    <label key={opt} style={sLabel}><input type="checkbox" checked={ppfAreas.includes(opt)} onChange={() => toggleCheck(ppfAreas, setPpfAreas, opt)} />{opt}</label>label>
                                                                                  ))}
                                                        </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                   )}
                                                                                                                                                                                                                                                                                                                                                                                                                   {service === 'ceramic' && (
                                                        <div className="form-group full">
                                                                                <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>What would you like coated? *</p>p>
                                                          {['Full exterior paint', 'Wheels', 'Windows', 'Full vehicle package', "Not sure, I'd like a recommendation"].map(opt => (
                                                                                    <label key={opt} style={sLabel}><input type="checkbox" checked={ceramicAreas.includes(opt)} onChange={() => toggleCheck(ceramicAreas, setCeramicAreas, opt)} />{opt}</label>label>
                                                                                  ))}
                                                        </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                   )}
                                                                                                                                                                                                                                                                                                                                                                                                                   <div className="form-group full" style={sBtnRow}>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <button style={sBtnBack} onClick={back}>Back</button>button>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <button style={sBtnNext} onClick={next}>Next</button>button>
                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                 </>div>
                                                                                                                                                                                                                                                                                                                                                                                                               )}
                                                                                                                                                                                                                                                                                                                                                                                                               {step === 4 && (
                                                    <div className="form-grid">
                                                                        <div className="form-group full">
                                                                                              <p style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>How soon do you need it done? *</p>p>
                                                                                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                                                                                {[{ label: 'ASAP', sub: 'Within a few days' }, { label: 'This week', sub: 'Before the weekend' }, { label: '1-2 weeks', sub: 'No big rush' }, { label: 'Just researching', sub: 'Checking prices' }].map(({ label, sub }) => (
                                                                                <div key={label} onClick={() => setTimeline(label)} style={sCard(timeline === label)}>
                                                                                                            <div style={{ fontSize: '13px', fontWeight: 500 }}>{label}</div>div>
                                                                                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{sub}</div>div>
                                                                                  </div>div>
                                                                              ))}
                                                                                                </div>div>
                                                                        </div>div>
                                                                        <div className="form-group full"><input className="form-input" placeholder="Preferred appointment time (optional)" value={appointmentTime} onChange={e => setAppointmentTime(e.target.value)} /></div>div>
                                                                        <div className="form-group full"><textarea className="form-textarea" placeholder="Additional details (optional)" value={message} onChange={e => setMessage(e.target.value)} /></div>div>
                                                                        <div className="form-group full" style={sBtnRow}>
                                                                                              <button style={sBtnBack} onClick={back}>Back</button>button>
                                                                                              <button style={sBtnNext} onClick={handleSubmit} disabled={loading}>{loading ? 'SENDING...' : 'GET MY FREE QUOTE'}</button>button>
                                                                        </div>div>
                                                    </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                               )}
                                                                                                                                                                                                                                                                                                                                                                                                             </>div>
                                                                                                                                                                                                                                                                                                                                                                                                           )}
                                                                                                                                                                                                                                                                                                                                                                                                           <div>
                                                                                                                                                                                                                                                                                                                                                                                                                         <div className="sidebar-card">
                                                                                                                                                                                                                                                                                                                                                                                                                                         <h3>Contact Info</h3>h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p><span className="sidebar-icon">📞</span>span> (954) 737-2785</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p><span className="sidebar-icon">✉</span>span> blacklinetintingsales@gmail.com</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p><span className="sidebar-icon">📍</span>span> Broward County, FL</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p><span className="sidebar-icon">🕐</span>span> Mon-Sat: 8AM - 6PM</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                         <div className="sidebar-card">
                                                                                                                                                                                                                                                                                                                                                                                                                                         <h3>Why BlackLine?</h3>h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p>✓ Premium ceramic & carbon films</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p>✓ Lifetime warranty on every job</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p>✓ Same-week appointments</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p>✓ Transparent pricing</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                         <p>✓ VIP discounts for military & first responders</p>p>
                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                                       </div>div>
                                                                                                                                                                                                                                                                                                                                                                                                         </i>div>
                                                                                                                                                                                                                                                                                                                                                                                                     </>div>
                                                                                                                                                                                                                                                                                                                                                                                                   </pl>section>
                                                                                                                                                                                                                                                                                                                                                                                                 </>>
                                                                                                                                                                                                                                                                                                                                                              )
                                                                                                                                                                                                                                                                                                                                                            }</></></></>
