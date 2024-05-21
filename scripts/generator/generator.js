let ab = 'abcdefghijklmnopqrstuvwxyz'

class Generator {
    constructor(words) {
        this.words = words

        if (!localStorage.getItem('values')) this.values = {"aa":1000,"ab":1000,"ac":1000,"ad":1000,"ae":1000,"af":1000,"ag":1000,"ah":1000,"ai":1000,"aj":1000,"ak":1000,"al":1000,"am":1000,"an":1000,"ao":1000,"ap":1000,"aq":1000,"ar":1000,"as":1000,"at":1000,"au":1000,"av":1000,"aw":1000,"ax":1000,"ay":1000,"az":1000,"ba":1000,"bb":1000,"bc":1000,"bd":1000,"be":1000,"bf":1000,"bg":1000,"bh":1000,"bi":1000,"bj":1000,"bk":1000,"bl":1000,"bm":1000,"bn":1000,"bo":1000,"bp":1000,"bq":1000,"br":1000,"bs":1000,"bt":1000,"bu":1000,"bv":1000,"bw":1000,"bx":1000,"by":1000,"bz":1000,"ca":1000,"cb":1000,"cc":1000,"cd":1000,"ce":1000,"cf":1000,"cg":1000,"ch":1000,"ci":1000,"cj":1000,"ck":1000,"cl":1000,"cm":1000,"cn":1000,"co":1000,"cp":1000,"cq":1000,"cr":1000,"cs":1000,"ct":1000,"cu":1000,"cv":1000,"cw":1000,"cx":1000,"cy":1000,"cz":1000,"da":1000,"db":1000,"dc":1000,"dd":1000,"de":1000,"df":1000,"dg":1000,"dh":1000,"di":1000,"dj":1000,"dk":1000,"dl":1000,"dm":1000,"dn":1000,"do":1000,"dp":1000,"dq":1000,"dr":1000,"ds":1000,"dt":1000,"du":1000,"dv":1000,"dw":1000,"dx":1000,"dy":1000,"dz":1000,"ea":1000,"eb":1000,"ec":1000,"ed":1000,"ee":1000,"ef":1000,"eg":1000,"eh":1000,"ei":1000,"ej":1000,"ek":1000,"el":1000,"em":1000,"en":1000,"eo":1000,"ep":1000,"eq":1000,"er":1000,"es":1000,"et":1000,"eu":1000,"ev":1000,"ew":1000,"ex":1000,"ey":1000,"ez":1000,"fa":1000,"fb":1000,"fc":1000,"fd":1000,"fe":1000,"ff":1000,"fg":1000,"fh":1000,"fi":1000,"fj":1000,"fk":1000,"fl":1000,"fm":1000,"fn":1000,"fo":1000,"fp":1000,"fq":1000,"fr":1000,"fs":1000,"ft":1000,"fu":1000,"fv":1000,"fw":1000,"fx":1000,"fy":1000,"fz":1000,"ga":1000,"gb":1000,"gc":1000,"gd":1000,"ge":1000,"gf":1000,"gg":1000,"gh":1000,"gi":1000,"gj":1000,"gk":1000,"gl":1000,"gm":1000,"gn":1000,"go":1000,"gp":1000,"gq":1000,"gr":1000,"gs":1000,"gt":1000,"gu":1000,"gv":1000,"gw":1000,"gx":1000,"gy":1000,"gz":1000,"ha":1000,"hb":1000,"hc":1000,"hd":1000,"he":1000,"hf":1000,"hg":1000,"hh":1000,"hi":1000,"hj":1000,"hk":1000,"hl":1000,"hm":1000,"hn":1000,"ho":1000,"hp":1000,"hq":1000,"hr":1000,"hs":1000,"ht":1000,"hu":1000,"hv":1000,"hw":1000,"hx":1000,"hy":1000,"hz":1000,"ia":1000,"ib":1000,"ic":1000,"id":1000,"ie":1000,"if":1000,"ig":1000,"ih":1000,"ii":1000,"ij":1000,"ik":1000,"il":1000,"im":1000,"in":1000,"io":1000,"ip":1000,"iq":1000,"ir":1000,"is":1000,"it":1000,"iu":1000,"iv":1000,"iw":1000,"ix":1000,"iy":1000,"iz":1000,"ja":1000,"jb":1000,"jc":1000,"jd":1000,"je":1000,"jf":1000,"jg":1000,"jh":1000,"ji":1000,"jj":1000,"jk":1000,"jl":1000,"jm":1000,"jn":1000,"jo":1000,"jp":1000,"jq":1000,"jr":1000,"js":1000,"jt":1000,"ju":1000,"jv":1000,"jw":1000,"jx":1000,"jy":1000,"jz":1000,"ka":1000,"kb":1000,"kc":1000,"kd":1000,"ke":1000,"kf":1000,"kg":1000,"kh":1000,"ki":1000,"kj":1000,"kk":1000,"kl":1000,"km":1000,"kn":1000,"ko":1000,"kp":1000,"kq":1000,"kr":1000,"ks":1000,"kt":1000,"ku":1000,"kv":1000,"kw":1000,"kx":1000,"ky":1000,"kz":1000,"la":1000,"lb":1000,"lc":1000,"ld":1000,"le":1000,"lf":1000,"lg":1000,"lh":1000,"li":1000,"lj":1000,"lk":1000,"ll":1000,"lm":1000,"ln":1000,"lo":1000,"lp":1000,"lq":1000,"lr":1000,"ls":1000,"lt":1000,"lu":1000,"lv":1000,"lw":1000,"lx":1000,"ly":1000,"lz":1000,"ma":1000,"mb":1000,"mc":1000,"md":1000,"me":1000,"mf":1000,"mg":1000,"mh":1000,"mi":1000,"mj":1000,"mk":1000,"ml":1000,"mm":1000,"mn":1000,"mo":1000,"mp":1000,"mq":1000,"mr":1000,"ms":1000,"mt":1000,"mu":1000,"mv":1000,"mw":1000,"mx":1000,"my":1000,"mz":1000,"na":1000,"nb":1000,"nc":1000,"nd":1000,"ne":1000,"nf":1000,"ng":1000,"nh":1000,"ni":1000,"nj":1000,"nk":1000,"nl":1000,"nm":1000,"nn":1000,"no":1000,"np":1000,"nq":1000,"nr":1000,"ns":1000,"nt":1000,"nu":1000,"nv":1000,"nw":1000,"nx":1000,"ny":1000,"nz":1000,"oa":1000,"ob":1000,"oc":1000,"od":1000,"oe":1000,"of":1000,"og":1000,"oh":1000,"oi":1000,"oj":1000,"ok":1000,"ol":1000,"om":1000,"on":1000,"oo":1000,"op":1000,"oq":1000,"or":1000,"os":1000,"ot":1000,"ou":1000,"ov":1000,"ow":1000,"ox":1000,"oy":1000,"oz":1000,"pa":1000,"pb":1000,"pc":1000,"pd":1000,"pe":1000,"pf":1000,"pg":1000,"ph":1000,"pi":1000,"pj":1000,"pk":1000,"pl":1000,"pm":1000,"pn":1000,"po":1000,"pp":1000,"pq":1000,"pr":1000,"ps":1000,"pt":1000,"pu":1000,"pv":1000,"pw":1000,"px":1000,"py":1000,"pz":1000,"qa":1000,"qb":1000,"qc":1000,"qd":1000,"qe":1000,"qf":1000,"qg":1000,"qh":1000,"qi":1000,"qj":1000,"qk":1000,"ql":1000,"qm":1000,"qn":1000,"qo":1000,"qp":1000,"qq":1000,"qr":1000,"qs":1000,"qt":1000,"qu":1000,"qv":1000,"qw":1000,"qx":1000,"qy":1000,"qz":1000,"ra":1000,"rb":1000,"rc":1000,"rd":1000,"re":1000,"rf":1000,"rg":1000,"rh":1000,"ri":1000,"rj":1000,"rk":1000,"rl":1000,"rm":1000,"rn":1000,"ro":1000,"rp":1000,"rq":1000,"rr":1000,"rs":1000,"rt":1000,"ru":1000,"rv":1000,"rw":1000,"rx":1000,"ry":1000,"rz":1000,"sa":1000,"sb":1000,"sc":1000,"sd":1000,"se":1000,"sf":1000,"sg":1000,"sh":1000,"si":1000,"sj":1000,"sk":1000,"sl":1000,"sm":1000,"sn":1000,"so":1000,"sp":1000,"sq":1000,"sr":1000,"ss":1000,"st":1000,"su":1000,"sv":1000,"sw":1000,"sx":1000,"sy":1000,"sz":1000,"ta":1000,"tb":1000,"tc":1000,"td":1000,"te":1000,"tf":1000,"tg":1000,"th":1000,"ti":1000,"tj":1000,"tk":1000,"tl":1000,"tm":1000,"tn":1000,"to":1000,"tp":1000,"tq":1000,"tr":1000,"ts":1000,"tt":1000,"tu":1000,"tv":1000,"tw":1000,"tx":1000,"ty":1000,"tz":1000,"ua":1000,"ub":1000,"uc":1000,"ud":1000,"ue":1000,"uf":1000,"ug":1000,"uh":1000,"ui":1000,"uj":1000,"uk":1000,"ul":1000,"um":1000,"un":1000,"uo":1000,"up":1000,"uq":1000,"ur":1000,"us":1000,"ut":1000,"uu":1000,"uv":1000,"uw":1000,"ux":1000,"uy":1000,"uz":1000,"va":1000,"vb":1000,"vc":1000,"vd":1000,"ve":1000,"vf":1000,"vg":1000,"vh":1000,"vi":1000,"vj":1000,"vk":1000,"vl":1000,"vm":1000,"vn":1000,"vo":1000,"vp":1000,"vq":1000,"vr":1000,"vs":1000,"vt":1000,"vu":1000,"vv":1000,"vw":1000,"vx":1000,"vy":1000,"vz":1000,"wa":1000,"wb":1000,"wc":1000,"wd":1000,"we":1000,"wf":1000,"wg":1000,"wh":1000,"wi":1000,"wj":1000,"wk":1000,"wl":1000,"wm":1000,"wn":1000,"wo":1000,"wp":1000,"wq":1000,"wr":1000,"ws":1000,"wt":1000,"wu":1000,"wv":1000,"ww":1000,"wx":1000,"wy":1000,"wz":1000,"xa":1000,"xb":1000,"xc":1000,"xd":1000,"xe":1000,"xf":1000,"xg":1000,"xh":1000,"xi":1000,"xj":1000,"xk":1000,"xl":1000,"xm":1000,"xn":1000,"xo":1000,"xp":1000,"xq":1000,"xr":1000,"xs":1000,"xt":1000,"xu":1000,"xv":1000,"xw":1000,"xx":1000,"xy":1000,"xz":1000,"ya":1000,"yb":1000,"yc":1000,"yd":1000,"ye":1000,"yf":1000,"yg":1000,"yh":1000,"yi":1000,"yj":1000,"yk":1000,"yl":1000,"ym":1000,"yn":1000,"yo":1000,"yp":1000,"yq":1000,"yr":1000,"ys":1000,"yt":1000,"yu":1000,"yv":1000,"yw":1000,"yx":1000,"yy":1000,"yz":1000,"za":1000,"zb":1000,"zc":1000,"zd":1000,"ze":1000,"zf":1000,"zg":1000,"zh":1000,"zi":1000,"zj":1000,"zk":1000,"zl":1000,"zm":1000,"zn":1000,"zo":1000,"zp":1000,"zq":1000,"zr":1000,"zs":1000,"zt":1000,"zu":1000,"zv":1000,"zw":1000,"zx":1000,"zy":1000,"zz":1000}
        else this.values = JSON.parse(localStorage.getItem('values'))

        //this.values = {"aa":0,"ab":0,"ac":0,"ad":0,"ae":0,"af":0,"ag":0,"ah":0,"ai":0,"aj":0,"ak":0,"al":0,"am":0,"an":0,"ao":0,"ap":0,"aq":0,"ar":0,"as":0,"at":0,"au":0,"av":0,"aw":0,"ax":0,"ay":0,"az":0,"ba":0,"bb":0,"bc":0,"bd":0,"be":0,"bf":0,"bg":0,"bh":0,"bi":0,"bj":0,"bk":0,"bl":0,"bm":0,"bn":0,"bo":0,"bp":0,"bq":0,"br":0,"bs":0,"bt":0,"bu":0,"bv":0,"bw":0,"bx":0,"by":0,"bz":0,"ca":0,"cb":0,"cc":0,"cd":0,"ce":0,"cf":0,"cg":0,"ch":0,"ci":0,"cj":0,"ck":0,"cl":0,"cm":0,"cn":0,"co":0,"cp":0,"cq":0,"cr":0,"cs":0,"ct":0,"cu":0,"cv":0,"cw":0,"cx":0,"cy":0,"cz":0,"da":0,"db":0,"dc":0,"dd":0,"de":0,"df":0,"dg":0,"dh":0,"di":0,"dj":0,"dk":0,"dl":0,"dm":0,"dn":0,"do":0,"dp":0,"dq":0,"dr":0,"ds":0,"dt":0,"du":0,"dv":0,"dw":0,"dx":0,"dy":0,"dz":0,"ea":0,"eb":0,"ec":0,"ed":0,"ee":0,"ef":0,"eg":0,"eh":0,"ei":0,"ej":0,"ek":0,"el":0,"em":0,"en":0,"eo":0,"ep":0,"eq":0,"er":0,"es":0,"et":0,"eu":0,"ev":0,"ew":0,"ex":0,"ey":0,"ez":0,"fa":0,"fb":0,"fc":0,"fd":0,"fe":0,"ff":0,"fg":0,"fh":0,"fi":0,"fj":0,"fk":0,"fl":0,"fm":0,"fn":0,"fo":0,"fp":0,"fq":0,"fr":0,"fs":0,"ft":0,"fu":0,"fv":0,"fw":0,"fx":0,"fy":0,"fz":0,"ga":0,"gb":0,"gc":0,"gd":0,"ge":0,"gf":0,"gg":0,"gh":0,"gi":0,"gj":0,"gk":0,"gl":0,"gm":0,"gn":0,"go":0,"gp":0,"gq":0,"gr":0,"gs":0,"gt":0,"gu":0,"gv":0,"gw":0,"gx":0,"gy":0,"gz":0,"ha":0,"hb":0,"hc":0,"hd":0,"he":0,"hf":0,"hg":0,"hh":0,"hi":0,"hj":0,"hk":0,"hl":0,"hm":0,"hn":0,"ho":0,"hp":0,"hq":0,"hr":0,"hs":0,"ht":0,"hu":0,"hv":0,"hw":0,"hx":0,"hy":0,"hz":0,"ia":0,"ib":0,"ic":0,"id":0,"ie":0,"if":0,"ig":0,"ih":0,"ii":0,"ij":0,"ik":0,"il":0,"im":0,"in":0,"io":0,"ip":0,"iq":0,"ir":0,"is":1000,"it":0,"iu":0,"iv":0,"iw":0,"ix":0,"iy":0,"iz":0,"ja":0,"jb":0,"jc":0,"jd":0,"je":0,"jf":0,"jg":0,"jh":0,"ji":0,"jj":0,"jk":0,"jl":0,"jm":0,"jn":0,"jo":0,"jp":0,"jq":0,"jr":0,"js":0,"jt":0,"ju":0,"jv":0,"jw":0,"jx":0,"jy":0,"jz":0,"ka":0,"kb":0,"kc":0,"kd":0,"ke":0,"kf":0,"kg":0,"kh":0,"ki":0,"kj":0,"kk":0,"kl":0,"km":0,"kn":0,"ko":0,"kp":0,"kq":0,"kr":0,"ks":0,"kt":0,"ku":0,"kv":0,"kw":0,"kx":0,"ky":0,"kz":0,"la":0,"lb":0,"lc":0,"ld":0,"le":0,"lf":0,"lg":0,"lh":0,"li":0,"lj":0,"lk":0,"ll":0,"lm":0,"ln":0,"lo":0,"lp":0,"lq":0,"lr":0,"ls":0,"lt":0,"lu":0,"lv":0,"lw":0,"lx":0,"ly":0,"lz":0,"ma":0,"mb":0,"mc":0,"md":0,"me":0,"mf":0,"mg":0,"mh":0,"mi":0,"mj":0,"mk":0,"ml":0,"mm":0,"mn":0,"mo":0,"mp":0,"mq":0,"mr":0,"ms":0,"mt":0,"mu":0,"mv":0,"mw":0,"mx":0,"my":0,"mz":0,"na":0,"nb":0,"nc":0,"nd":0,"ne":0,"nf":0,"ng":0,"nh":0,"ni":0,"nj":0,"nk":0,"nl":0,"nm":0,"nn":0,"no":0,"np":0,"nq":0,"nr":0,"ns":0,"nt":0,"nu":0,"nv":0,"nw":0,"nx":0,"ny":0,"nz":0,"oa":0,"ob":0,"oc":0,"od":0,"oe":0,"of":0,"og":0,"oh":0,"oi":0,"oj":0,"ok":0,"ol":0,"om":0,"on":0,"oo":0,"op":0,"oq":0,"or":0,"os":0,"ot":0,"ou":0,"ov":0,"ow":0,"ox":0,"oy":0,"oz":0,"pa":0,"pb":0,"pc":0,"pd":0,"pe":0,"pf":0,"pg":0,"ph":0,"pi":0,"pj":0,"pk":0,"pl":0,"pm":0,"pn":0,"po":0,"pp":0,"pq":0,"pr":0,"ps":0,"pt":0,"pu":0,"pv":0,"pw":0,"px":0,"py":0,"pz":0,"qa":0,"qb":0,"qc":0,"qd":0,"qe":0,"qf":0,"qg":0,"qh":0,"qi":0,"qj":0,"qk":0,"ql":0,"qm":0,"qn":0,"qo":0,"qp":0,"qq":0,"qr":0,"qs":0,"qt":0,"qu":0,"qv":0,"qw":0,"qx":0,"qy":0,"qz":0,"ra":0,"rb":0,"rc":0,"rd":0,"re":0,"rf":0,"rg":0,"rh":0,"ri":0,"rj":0,"rk":0,"rl":0,"rm":0,"rn":0,"ro":0,"rp":0,"rq":0,"rr":0,"rs":0,"rt":0,"ru":0,"rv":0,"rw":0,"rx":0,"ry":0,"rz":0,"sa":0,"sb":0,"sc":0,"sd":0,"se":0,"sf":0,"sg":0,"sh":0,"si":0,"sj":0,"sk":0,"sl":0,"sm":0,"sn":0,"so":0,"sp":0,"sq":0,"sr":0,"ss":1000,"st":0,"su":0,"sv":0,"sw":0,"sx":0,"sy":0,"sz":0,"ta":0,"tb":0,"tc":0,"td":0,"te":0,"tf":0,"tg":0,"th":0,"ti":0,"tj":0,"tk":0,"tl":0,"tm":0,"tn":0,"to":0,"tp":0,"tq":0,"tr":0,"ts":0,"tt":0,"tu":0,"tv":0,"tw":0,"tx":0,"ty":0,"tz":0,"ua":0,"ub":0,"uc":0,"ud":0,"ue":0,"uf":0,"ug":0,"uh":0,"ui":0,"uj":0,"uk":0,"ul":0,"um":0,"un":0,"uo":0,"up":0,"uq":0,"ur":0,"us":0,"ut":0,"uu":0,"uv":0,"uw":0,"ux":0,"uy":0,"uz":0,"va":0,"vb":0,"vc":0,"vd":0,"ve":0,"vf":0,"vg":0,"vh":0,"vi":0,"vj":0,"vk":0,"vl":0,"vm":0,"vn":0,"vo":0,"vp":0,"vq":0,"vr":0,"vs":0,"vt":0,"vu":0,"vv":0,"vw":0,"vx":0,"vy":0,"vz":0,"wa":0,"wb":0,"wc":0,"wd":0,"we":0,"wf":0,"wg":0,"wh":0,"wi":0,"wj":0,"wk":0,"wl":0,"wm":0,"wn":0,"wo":0,"wp":0,"wq":0,"wr":0,"ws":0,"wt":0,"wu":0,"wv":0,"ww":0,"wx":0,"wy":0,"wz":0,"xa":0,"xb":0,"xc":0,"xd":0,"xe":0,"xf":0,"xg":0,"xh":0,"xi":0,"xj":0,"xk":0,"xl":0,"xm":0,"xn":0,"xo":0,"xp":0,"xq":0,"xr":0,"xs":0,"xt":0,"xu":0,"xv":0,"xw":0,"xx":0,"xy":0,"xz":0,"ya":0,"yb":0,"yc":0,"yd":0,"ye":0,"yf":0,"yg":0,"yh":0,"yi":0,"yj":0,"yk":0,"yl":0,"ym":0,"yn":0,"yo":0,"yp":0,"yq":0,"yr":0,"ys":0,"yt":0,"yu":0,"yv":0,"yw":0,"yx":0,"yy":0,"yz":0,"za":0,"zb":0,"zc":0,"zd":0,"ze":0,"zf":0,"zg":0,"zh":0,"zi":0,"zj":0,"zk":0,"zl":0,"zm":0,"zn":0,"zo":0,"zp":0,"zq":0,"zr":0,"zs":0,"zt":0,"zu":0,"zv":0,"zw":0,"zx":0,"zy":0,"zz":0}
    }


    append (a, b, time) {
        this.values[a + b] = (this.values[a + b] * 99 + time) / 100

        localStorage.setItem('values', JSON.stringify(this.values))
    }


    /**
     * Shuffles an array
     * @param array
     * @return {array}
     */
    shuffle (array) {
        const new_array = []

        while (array.length > 0) {
            const index = Math.floor(Math.random() * array.length)
            new_array.push(array[index])
            array.splice(index, 1)
        }

        return new_array
    }


    /**
     * Generates a list of words for a test
     * @param amount - Amount of words to output
     * @return {Array|*[]}
     */
    generate (amount) {
        const array = this.rank()

        if(array.length <= amount) {
            return this.shuffle(array)
        }

        return this.selectRandom(amount, array)
    }


    weightedRandom (prob) {
        return prob >= Math.random()
    }


    selectRandom (amount, array) {
        let sum = 0

        for (let item of array) {
            sum += item.value
        }

        let result = []
        while(amount--) {
            let temp_sum = sum

            for (let i in array) {
                if (this.weightedRandom(array[i].value / temp_sum)) {
                    sum -= array[i].value
                    result.push(array[i])
                    array.splice(i, 1)

                    break
                } else {
                    temp_sum -= array[i].value
                }
            }
        }

        return result
    }


    rank () {
        let entries = []

        for (let word of this.words) {
            let temp_eval = this.eval(word)

            if (temp_eval === 0) continue

            entries.push({word: word, value: temp_eval})
        }

        return entries.sort((a, b) => {return b.value - a.value})
    }


    eval(word) {
        if (word.length < 4) return 0

        let output = 0
        for (let i = 1; i < word.length; i++) {
            output += this.values[word[i-1] + word[i]]
        }

        output /= Math.pow(word.length - 1, 2.1)

        return output
    }
}