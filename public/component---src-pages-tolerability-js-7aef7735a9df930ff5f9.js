(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+5i3":function(e,a,t){},"1PzU":function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t("q1tI"),n=function(){var e="object"==typeof window,a=Object(r.useCallback)((function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}),[e]),t=Object(r.useState)(a),n=t[0],l=t[1];return Object(r.useEffect)((function(){if(!e)return!1;var t=function(){l(a())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[a,e]),n}},"2OgC":function(e,a,t){e.exports={tolerability:"tolerability-module--tolerability--3u2xq",header:"tolerability-module--header--3GUKu",footnotes:"tolerability-module--footnotes--2Pjv3",topicHeader:"tolerability-module--topicHeader--HpEAY",topic:"tolerability-module--topic--217aD",references:"tolerability-module--references--1o5_n",chartFooter:"tolerability-module--chartFooter--1BVQi",footnotesSection:"tolerability-module--footnotesSection--1LdpR",footnoteRef:"tolerability-module--footnoteRef--PwIvt",symbol:"tolerability-module--symbol--1wd2d",acronym:"tolerability-module--acronym--1vUmf"}},nGjg:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("7vrA"),i=t("xdkL"),o=t.n(i);a.a=function(e){var a=e.title,t=e.references,r=void 0===t?[]:t;return console.log("references ",r),n.a.createElement(l.a,{fluid:!0,as:"section",className:o.a.pageTitle},n.a.createElement(l.a,null,n.a.createElement("h1",{className:o.a.title},a,r.length>0&&n.a.createElement("sup",{className:o.a.references},r.join(",")))))}},rd6O:function(e,a,t){e.exports={desktopOnly:"TolerabilityChart-module--desktopOnly--2bK0t",mobileOnly:"TolerabilityChart-module--mobileOnly--3Ah6l",chart:"TolerabilityChart-module--chart--HFKM7",headings:"TolerabilityChart-module--headings--26UC2",heading:"TolerabilityChart-module--heading--1cFcF",header:"TolerabilityChart-module--header--2tz-9",groups:"TolerabilityChart-module--groups--2_4nL",group:"TolerabilityChart-module--group--1phWn",subheader:"TolerabilityChart-module--subheader--xEo42",dataContainer:"TolerabilityChart-module--dataContainer--3iKle",data:"TolerabilityChart-module--data--1fFhi",disordersGroup:"TolerabilityChart-module--disordersGroup--2jxxR",disordersContainer:"TolerabilityChart-module--disordersContainer--3Qa0B",disorderContainer:"TolerabilityChart-module--disorderContainer--1ZvyZ",valuesContainer:"TolerabilityChart-module--valuesContainer--prcvy",value:"TolerabilityChart-module--value--13xyi",disordersHeader:"TolerabilityChart-module--disordersHeader--3wDnO",valueHeader:"TolerabilityChart-module--valueHeader--2A0Ce",footnotes:"TolerabilityChart-module--footnotes--Padte"}},wbeA:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return O}));var r=t("q1tI"),n=t.n(r),l=t("7vrA"),i=t("TSYQ"),o=t.n(i),s=t("XlOV"),c=t("8esB"),d=t("wpag"),u=t("QLv1"),p=t("7oih"),m=t("EYWl"),v=t("nGjg"),h=(t("rzGZ"),t("Dq+y"),t("8npG"),t("E5k/"),t("RHZy")),f=t("Haw6"),y=t("1PzU"),b=t("rd6O"),g=t.n(b);h.a.registerPlugin(f.a);var E=function(e){var a=e.disorders,t=e.studies,l=0,i=Object(r.useState)(),s=i[0],c=i[1],d=Object(y.a)().width;Object(r.useEffect)((function(){c(f.a.create({trigger:"#chart",start:"top-=1rem top+=109px",pin:".pinHeadings",end:"bottom bottom-=240px"}))}),[c]),Object(r.useEffect)((function(){d<992?s&&s.disable():s&&s.enable()}),[d,s]);var p=a.map((function(e,a){var r=e.disorders;return{header:e.header,disorders:r.map((function(e){var a=l++;return{header:Object.assign({},e),values:Array.prototype.concat.apply([],t.map((function(e){var t=e.sample,r=e.control;return[t.disorders[a].value+" ("+t.disorders[a].percent+"%)",r.disorders[a].value+" ("+r.disorders[a].percent+"%)"]})))}}))}}));return n.a.createElement("div",{id:"chart",className:o()([g.a.chart])},n.a.createElement("div",{className:o()([g.a.headings,"pinHeadings"])},t.map((function(e,a){var t,r=e.header,l=e.subheader,i=e.sample,s=e.control;return n.a.createElement("div",{className:g.a.heading,key:a},n.a.createElement("div",{className:g.a.header},n.a.createElement("div",null,r.title,r.footnotes&&n.a.createElement("sup",{className:g.a.footnotes},r.footnotes.map((function(e){return u.b[e]})).join(",")),"\n",n.a.createElement("span",{className:o()([g.a.subheader],(t={},t[g.a.desktopOnly]=l.mobileTitle,t))},l.title),l.mobileTitle&&n.a.createElement("span",{className:o()([g.a.subheader,g.a.mobileOnly])},l.mobileTitle))),n.a.createElement("div",{className:g.a.groups},n.a.createElement("div",{className:g.a.group},n.a.createElement("div",null,n.a.createElement("p",null,i.header),n.a.createElement("p",null,"n=("+i.size+")"))),n.a.createElement("div",{className:g.a.group},n.a.createElement("div",null,n.a.createElement("p",null,s.header),n.a.createElement("p",null,"n=("+s.size+")")))))}))),n.a.createElement("div",{className:g.a.dataContainer},n.a.createElement("div",{className:g.a.data},p.map((function(e,a){var t=e.disorders,r=e.header;return n.a.createElement("div",{key:a,className:g.a.disordersContainer},n.a.createElement("div",{className:g.a.disordersHeader},n.a.createElement("span",null,r)),n.a.createElement("div",{className:g.a.disordersGroup},t.map((function(e,a){var t,r=e.header,l=e.values;return n.a.createElement("div",{key:a,className:g.a.disorderContainer},n.a.createElement("div",{className:g.a.valueHeader},n.a.createElement("p",null,r.title,(null===(t=r.footnotes)||void 0===t?void 0:t.length)>0&&n.a.createElement("sup",{className:g.a.footnotes},r.footnotes.map((function(e){return u.b[e]})).join(",")))),n.a.createElement("div",{className:g.a.valuesContainer},l.map((function(e,a){return n.a.createElement("div",{key:a,className:g.a.value},e)}))))}))))})))))},w=(t("+5i3"),t("2OgC")),N=t.n(w),A=["PALFORZIA [package insert]. Brisbane, CA: Aimmune Therapeutics, Inc.","The PALISADE Group of Clinical Investigators: Vickery BP, Vereda A, Casale TB, et al. Supplementary Appendix. N Engl J Med. 2018;379(suppl):1991-2001."],C=["Treatment-emergent adverse reactions reported in ≥5% of participants treated with PALFORZIA and ≥5% percentage points greater than reported in participants treated with placebo in any dosing phase (aged 4 through 17 years).","Adverse events were coded to system organ class and preferred term using the MedDRA, version 19.1.","In Study 2, no adverse events ≥5% were reported in subjects following treatment with 300 mg PALFORZIA (N=265).","Includes preferred terms of abdominal pain, abdominal pain upper, and abdominal discomfort.","Includes preferred terms of oral pruritus, tongue pruritus, and lip pruritus.","The anaphylactic reaction preferred term includes systemic allergic reactions of any severity, or which severe anaphylaxis was reported in four PALFORZIA-treated participants (0.6%) during Up-Dosing and one PALFORZIA-treated participant (0.3%) during Maintenance."],O=(a.default=function(e){var a=e.data;return n.a.createElement(s.a,{initialState:c.a,reducer:c.b},n.a.createElement(p.a,{referencesHeader:"References",references:A},n.a.createElement(m.a,{title:a.page.title}),n.a.createElement("main",{className:N.a.tolerability},n.a.createElement(v.a,{title:a.page.title}),n.a.createElement(l.a,{fluid:!0,as:"section",className:N.a.container},n.a.createElement(l.a,null,n.a.createElement("h2",{className:N.a.header},"Consistent safety profile across rigorous studies"),n.a.createElement("div",{className:N.a.topicContainer},n.a.createElement("h3",{className:N.a.topicHeader},"Adverse reactions were more frequently reported during Up-Dosing and decreased during Maintenance dosing.",n.a.createElement("sup",{className:N.a.references},"1")),n.a.createElement("p",{className:N.a.topic},"Study 1 (PALISADE) was a randomized, double-blind, placebo-controlled efficacy and safety study where participants were Up-Dosed for 20 to 40 weeks followed by Maintenance dosing for 24 to 48 weeks."),n.a.createElement("p",{className:N.a.topic},"Study 2 (RAMSES) was a randomized, double-blind, placebo-controlled safety study where participants were Up-Dosed for 20 to 40 weeks up to 300 mg daily dose with no extended Maintenance dosing.")),n.a.createElement("h2",{id:"chartHeader",className:o()([N.a.header,"pinHeader"])},"Most frequently reported adverse reactions in participants aged 4 through 17 years",n.a.createElement("sup",{className:N.a.references},"1"),n.a.createElement("sup",{className:N.a.footnotes},"*")),n.a.createElement("div",{className:N.a.topicContainer},n.a.createElement("p",{className:N.a.topic},"Symptoms during in-office PALFORZIA dosing had a median time to onset of 4 minutes for 71% of patients. Median time to resolution was 37 minutes.",n.a.createElement("sup",{className:N.a.footnotes},"1")),n.a.createElement("p",{className:N.a.topic},"Organized by system organ class/preferred term.",n.a.createElement("sup",{className:N.a.footnotes},"†"))),n.a.createElement(E,d),n.a.createElement("p",{className:N.a.chartFooter},"At each level of summarization (any event, system organ class, or preferred term), subjects with more than one adverse reaction were counted only once within each study period."),n.a.createElement("ol",{className:N.a.footnotesSection},C.map((function(e,a){return n.a.createElement("li",{className:N.a.footnoteRef,key:a},n.a.createElement("sup",{className:N.a.symbol},u.b[a]),e)}))),n.a.createElement("p",{className:N.a.acronym},"MedDRA = Medical Dictionary for Regulatory Activities."),n.a.createElement("h2",{id:"chartHeader",className:o()([N.a.header,"pinHeader"])},"Eosinophilic Gastrointestinal Disease"),n.a.createElement("p",{className:N.a.chartFooter},"In clinical studies, 28 of 1050 (2.7%) subjects were referred for a gastroenterology evaluation, and 17 of these 28 subjects reported undergoing an esophagogastroduodenoscopy (EGD). Of subjects who underwent an EGD, 12 were diagnosed with biopsy-confirmed eosinophilic esophagitis while receiving PALFORZIA compared with 0 of 292 (0%) subjects receiving placebo. After discontinuation of PALFORZIA, symptomatic improvement was reported in 12 of 12 subjects. In 8 subjects with available follow-up biopsy results, eosinophilic esophagitis was resolved in 6 subjects and improved in 2 subjects."))))))},"370739735")},wpag:function(e){e.exports=JSON.parse('{"disorders":[{"header":"Gastrointestinal disorders","disorders":[{"title":"Abdominal pain","footnotes":[3]},{"title":"Vomiting"},{"title":"Nausea"},{"title":"Oral pruritus","footnotes":[4]},{"title":"Oral paresthesia"}]},{"header":"Respiratory, thoracic, and mediastinal disorders","disorders":[{"title":"Throat irritation"},{"title":"Cough"},{"title":"Rhinorrhea"},{"title":"Sneezing"},{"title":"Throat tightness"},{"title":"Wheezing"},{"title":"Dyspnea"}]},{"header":"Skin and subcutaneous\\ntissue disorders","disorders":[{"title":"Pruritus"},{"title":"Urticaria"}]},{"header":"Immune system disorders","disorders":[{"title":"Anaphylactic reaction","footnotes":[5]}]},{"header":"Ear and labyrinth disorders","disorders":[{"title":"Ear pruritus"}]}],"studies":[{"header":{"title":"Study 1 & Study 2"},"subheader":{"title":"Initial Dose\\nEscalation"},"sample":{"header":"PALFORZIA","size":709,"disorders":[{"value":185,"percent":"26.1"},{"value":22,"percent":"3.1"},{"value":60,"percent":"8.5"},{"value":62,"percent":"8.7"},{"value":13,"percent":"1.8"},{"value":13,"percent":"1.8"},{"value":18,"percent":"2.5"},{"value":9,"percent":"1.3"},{"value":24,"percent":"3.4"},{"value":18,"percent":"2.5"},{"value":4,"percent":"0.6"},{"value":2,"percent":"0.3"},{"value":56,"percent":"7.9"},{"value":28,"percent":"3.9"},{"value":5,"percent":"0.7"},{"value":5,"percent":"0.7"}]},"control":{"header":"Placebo","size":292,"disorders":[{"value":24,"percent":"8.2"},{"value":15,"percent":"5.1"},{"value":2,"percent":"0.7"},{"value":9,"percent":"3.1"},{"value":7,"percent":"2.4"},{"value":0,"percent":"0.0"},{"value":1,"percent":"0.3"},{"value":4,"percent":"1.4"},{"value":8,"percent":"2.7"},{"value":3,"percent":"1.0"},{"value":0,"percent":"0.0"},{"value":1,"percent":"0.3"},{"value":16,"percent":"5.5"},{"value":10,"percent":"3.4"},{"value":1,"percent":"0.3"},{"value":1,"percent":"0.3"}]}},{"header":{"title":"Study 1 & Study 2"},"subheader":{"title":"Up-Dosing"},"sample":{"header":"PALFORZIA","size":693,"disorders":[{"value":465,"percent":"67.1"},{"value":253,"percent":"36.5"},{"value":224,"percent":"32.3"},{"value":216,"percent":"31.2"},{"value":94,"percent":"13.6"},{"value":63,"percent":"9.1"},{"value":221,"percent":"31.9"},{"value":145,"percent":"20.9"},{"value":140,"percent":"20.2"},{"value":98,"percent":"14.1"},{"value":85,"percent":"12.3"},{"value":53,"percent":"7.6"},{"value":225,"percent":"32.5"},{"value":197,"percent":"28.4"},{"value":63,"percent":"9.1"},{"value":41,"percent":"5.9"}]},"control":{"header":"Placebo","size":289,"disorders":[{"value":100,"percent":"34.6"},{"value":47,"percent":"16.3"},{"value":41,"percent":"14.2"},{"value":30,"percent":"10.4"},{"value":11,"percent":"3.8"},{"value":10,"percent":"3.5"},{"value":68,"percent":"23.5"},{"value":50,"percent":"17.3"},{"value":31,"percent":"10.7"},{"value":8,"percent":"2.8"},{"value":21,"percent":"7.3"},{"value":5,"percent":"1.7"},{"value":59,"percent":"20.4"},{"value":54,"percent":"18.7"},{"value":10,"percent":"3.5"},{"value":2,"percent":"0.7"}]}},{"header":{"title":"Study 1","footnotes":[2]},"subheader":{"title":"Maintenance Dosing","mobileTitle":"Maintenance Dose"},"sample":{"header":"PALFORZIA","size":310,"disorders":[{"value":90,"percent":"29.0"},{"value":50,"percent":"16.1"},{"value":45,"percent":"14.5"},{"value":51,"percent":"16.5"},{"value":23,"percent":"7.4"},{"value":10,"percent":"3.2"},{"value":61,"percent":"19.7"},{"value":46,"percent":"14.8"},{"value":33,"percent":"10.6"},{"value":20,"percent":"6.5"},{"value":19,"percent":"6.1"},{"value":17,"percent":"5.5"},{"value":45,"percent":"14.5"},{"value":63,"percent":"20.3"},{"value":27,"percent":"8.7"},{"value":7,"percent":"2.3"}]},"control":{"header":"Placebo","size":118,"disorders":[{"value":20,"percent":"16.9"},{"value":14,"percent":"11.9"},{"value":8,"percent":"6.8"},{"value":7,"percent":"5.9"},{"value":2,"percent":"1.7"},{"value":1,"percent":"0.8"},{"value":22,"percent":"18.6"},{"value":9,"percent":"7.6"},{"value":5,"percent":"4.2"},{"value":0,"percent":"0.0"},{"value":10,"percent":"8.5"},{"value":1,"percent":"0.8"},{"value":14,"percent":"11.9"},{"value":17,"percent":"14.4"},{"value":2,"percent":"1.7"},{"value":0,"percent":"0.0"}]}}]}')},xdkL:function(e,a,t){e.exports={title:"PageTitle-module--title--EAYj9",references:"PageTitle-module--references--272vH"}}}]);
//# sourceMappingURL=component---src-pages-tolerability-js-7aef7735a9df930ff5f9.js.map