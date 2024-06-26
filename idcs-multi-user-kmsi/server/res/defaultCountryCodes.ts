const DEFAULT_COUNTRY_CODES = [
  { "value": "AF_93", "label": "Afghanistan +93" },
  { "value": "AL_355", "label": "Albania +355" },
  { "value": "DZ_213", "label": "Algeria +213" },
  { "value": "AS_1684", "label": "American Samoa +1684" },
  { "value": "AD_376", "label": "Andorra +376" },
  { "value": "AO_244", "label": "Angola +244" },
  { "value": "AI_1264", "label": "Anguilla +1264" },
  { "value": "AQ_672", "label": "Antarctica +672" },
  { "value": "AG_1268", "label": "Antigua and Barbuda +1268" },
  { "value": "AR_54", "label": "Argentina +54" },
  { "value": "AM_374", "label": "Armenia +374" },
  { "value": "AW_297", "label": "Aruba +297" },
  { "value": "AU_61", "label": "Australia +61" },
  { "value": "AT_43", "label": "Austria +43" },
  { "value": "AZ_994", "label": "Azerbaijan +994" },
  { "value": "BS_1242", "label": "Bahamas +1242" },
  { "value": "BH_973", "label": "Bahrain +973" },
  { "value": "BD_880", "label": "Bangladesh +880" },
  { "value": "BB_1246", "label": "Barbados +1246" },
  { "value": "BY_375", "label": "Belarus +375" },
  { "value": "BE_32", "label": "Belgium +32" },
  { "value": "BZ_501", "label": "Belize +501" },
  { "value": "BJ_229", "label": "Benin +229" },
  { "value": "BM_1441", "label": "Bermuda +1441" },
  { "value": "BT_975", "label": "Bhutan +975" },
  { "value": "BO_591", "label": "Bolivia +591" },
  { "value": "BQ_599", "label": "Bonaire +599" },
  { "value": "BA_387", "label": "Bosnia and Herzegovina +387" },
  { "value": "BW_267", "label": "Botswana +267" },
  { "value": "BV_47", "label": "Bouvet Island +47" },
  { "value": "BR_55", "label": "Brazil +55" },
  { "value": "IO_246", "label": "British Indian Ocean Territory +246" },
  { "value": "BN_673", "label": "Brunei Darussalam +673" },
  { "value": "BG_359", "label": "Bulgaria +359" },
  { "value": "BF_226", "label": "Burkina Faso +226" },
  { "value": "BI_257", "label": "Burundi +257" },
  { "value": "KH_855", "label": "Cambodia +855" },
  { "value": "CM_237", "label": "Cameroon +237" },
  { "value": "CA_1", "label": "Canada +1" },
  { "value": "CV_238", "label": "Cape Verde +238" },
  { "value": "KY_1345", "label": "Cayman Islands +1345" },
  { "value": "CF_236", "label": "Central African Republic +236" },
  { "value": "TD_235", "label": "Chad +235" },
  { "value": "CL_56", "label": "Chile +56" },
  { "value": "CN_86", "label": "China +86" },
  { "value": "CX_53", "label": "Christmas Island +53" },
  { "value": "CC_61", "label": "Cocos (Keeling) Islands +61" },
  { "value": "CO_57", "label": "Colombia +57" },
  { "value": "KM_269", "label": "Comoros +269" },
  { "value": "CG_242", "label": "Congo +242" },
  { "value": "CD_243", "label": "Congo, Democratic Republic of the +243" },
  { "value": "CK_682", "label": "Cook Islands +682" },
  { "value": "CR_506", "label": "Costa Rica +506" },
  { "value": "HR_385", "label": "Croatia +385" },
  { "value": "CW_599", "label": "Curaçao +599" },
  { "value": "CY_357", "label": "Cyprus +357" },
  { "value": "CZ_420", "label": "Czech Republic +420" },
  { "value": "CI_225", "label": "Côte d'ivoire +225" },
  { "value": "DK_45", "label": "Denmark +45" },
  { "value": "DJ_253", "label": "Djibouti +253" },
  { "value": "DM_1", "label": "Dominica +1" },
  { "value": "DO_1", "label": "Dominican Republic +1" },
  { "value": "EC_593", "label": "Ecuador +593 " },
  { "value": "EG_20", "label": "Egypt +20" },
  { "value": "SV_503", "label": "El Salvador +503" },
  { "value": "GQ_240", "label": "Equatorial Guinea +240" },
  { "value": "ER_291", "label": "Eritrea +291" },
  { "value": "EE_372", "label": "Estonia +372" },
  { "value": "ET_251", "label": "Ethiopia +251" },
  { "value": "FK_500", "label": "Falkland Islands (Malvinas) +500" },
  { "value": "FO_298", "label": "Faroe Islands +298" },
  { "value": "FJ_679", "label": "Fiji +679" },
  { "value": "FI_358", "label": "Finland +358" },
  { "value": "FR_33", "label": "France +33" },
  { "value": "GF_594", "label": "French Guiana +594" },
  { "value": "PF_689", "label": "French Polynesia +689" },
  { "value": "TF_33", "label": "French Southern Territories +33" },
  { "value": "GA_241", "label": "Gabon +241" },
  { "value": "GM_220", "label": "Gambia +220" },
  { "value": "GE_995", "label": "Georgia +995" },
  { "value": "DE_49", "label": "Germany +49" },
  { "value": "GH_233", "label": "Ghana +233" },
  { "value": "GI_350", "label": "Gibraltar +350" },
  { "value": "GR_30", "label": "Greece +30" },
  { "value": "GL_299", "label": "Greenland +299" },
  { "value": "GD_1473", "label": "Grenada +1473" },
  { "value": "GP_590", "label": "Guadeloupe +590" },
  { "value": "GU_1671", "label": "Guam +1671" },
  { "value": "GT_502", "label": "Guatemala +502" },
  { "value": "GG_441481", "label": "Guernsey +441481" },
  { "value": "GN_224", "label": "Guinea +224" },
  { "value": "GW_245", "label": "Guinea-Bissau +245" },
  { "value": "GY_592", "label": "Guyana +592" },
  { "value": "HT_509", "label": "Haiti +509" },
  { "value": "HM_61", "label": "Heard Island and Mcdonald Islands +61" },
  { "value": "VA_379", "label": "Holy See (Vatican City State) +379" },
  { "value": "HN_504", "label": "Honduras +504" },
  { "value": "HK_852", "label": "Hong Kong +852" },
  { "value": "HU_36", "label": "Hungary +36" },
  { "value": "IS_354", "label": "Iceland +354" },
  { "value": "IN_91", "label": "India +91" },
  { "value": "ID_62", "label": "Indonesia +62" },
  { "value": "IQ_964", "label": "Iraq +964" },
  { "value": "IE_353", "label": "Ireland +353" },
  { "value": "IM_441624", "label": "Isle of Man +441624" },
  { "value": "IL_972", "label": "Israel +972" },
  { "value": "IT_39", "label": "Italy +39" },
  { "value": "JM_1876", "label": "Jamaica +1876" },
  { "value": "JP_81", "label": "Japan +81" },
  { "value": "JE_441534", "label": "Jersey +441534" },
  { "value": "JO_962", "label": "Jordan +962" },
  { "value": "KZ_7", "label": "Kazakhstan +7" },
  { "value": "KE_254", "label": "Kenya +254" },
  { "value": "KI_686", "label": "Kiribati +686" },
  { "value": "KR_82", "label": "Korea, Republic of +82" },
  { "value": "KW_965", "label": "Kuwait +965" },
  { "value": "KG_996", "label": "Kyrgyzstan +996" },
  { "value": "LA_856", "label": "Lao People's Democratic Republic +856" },
  { "value": "LV_371", "label": "Latvia +371" },
  { "value": "LB_961", "label": "Lebanon +961" },
  { "value": "LS_266", "label": "Lesotho +266" },
  { "value": "LR_231", "label": "Liberia +231" },
  { "value": "LY_218", "label": "Libya +218" },
  { "value": "LI_423", "label": "Liechtenstein +423" },
  { "value": "LT_370", "label": "Lithuania +370" },
  { "value": "LU_352", "label": "Luxembourg +352" },
  { "value": "MO_853", "label": "Macao +853" },
  { "value": "MK_389", "label": "Macedonia, The Former Yugoslav Republic of +389" },
  { "value": "MG_261", "label": "Madagascar +261" },
  { "value": "MW_265", "label": "Malawi +265" },
  { "value": "MY_60", "label": "Malaysia +60" },
  { "value": "MV_960", "label": "Maldives +960" },
  { "value": "ML_223", "label": "Mali +223" },
  { "value": "MT_356", "label": "Malta +356" },
  { "value": "MH_692", "label": "Marshall Islands +692" },
  { "value": "MQ_596", "label": "Martinique +596" },
  { "value": "MR_222", "label": "Mauritania +222" },
  { "value": "MU_230", "label": "Mauritius +230" },
  { "value": "YT_269", "label": "Mayotte +269" },
  { "value": "MX_52", "label": "Mexico +52" },
  { "value": "FM_691", "label": "Micronesia, Federated States of +691" },
  { "value": "MD_373", "label": "Moldova, Republic of +373" },
  { "value": "MC_377", "label": "Monaco +377" },
  { "value": "MN_976", "label": "Mongolia +976" },
  { "value": "ME_382", "label": "Montenegro +382" },
  { "value": "MS_1664", "label": "Montserrat +1664" },
  { "value": "MA_212", "label": "Morocco +212" },
  { "value": "MZ_258", "label": "Mozambique +258" },
  { "value": "MM_95", "label": "Myanmar +95" },
  { "value": "NA_264", "label": "Namibia +264" },
  { "value": "NR_674", "label": "Nauru +674" },
  { "value": "NP_977", "label": "Nepal +977" },
  { "value": "NL_31", "label": "Netherlands +31" },
  { "value": "NC_687", "label": "New Caledonia +687" },
  { "value": "NZ_64", "label": "New Zealand +64" },
  { "value": "NI_505", "label": "Nicaragua +505" },
  { "value": "NE_227", "label": "Niger +227" },
  { "value": "NG_234", "label": "Nigeria +234" },
  { "value": "NU_683", "label": "Niue +683" },
  { "value": "NF_672", "label": "Norfolk Island +672" },
  { "value": "MP_1670", "label": "Northern Mariana Islands +1670" },
  { "value": "NO_47", "label": "Norway +47" },
  { "value": "OM_968", "label": "Oman +968" },
  { "value": "PK_92", "label": "Pakistan +92" },
  { "value": "PW_680", "label": "Palau +680" },
  { "value": "PS_970", "label": "Palestine, State of +970" },
  { "value": "PA_507", "label": "Panama +507" },
  { "value": "PG_675", "label": "Papua New Guinea +675" },
  { "value": "PY_595", "label": "Paraguay +595" },
  { "value": "PE_51", "label": "Peru +51" },
  { "value": "PH_63", "label": "Philippines +63" },
  { "value": "PN_649", "label": "Pitcairn +649" },
  { "value": "PL_48", "label": "Poland +48" },
  { "value": "PT_351", "label": "Portugal +351" },
  { "value": "PR_1", "label": "Puerto Rico +1" },
  { "value": "QA_974", "label": "Qatar +974 " },
  { "value": "RO_40", "label": "Romania +40" },
  { "value": "RU_7", "label": "Russian Federation +7" },
  { "value": "RW_250", "label": "Rwanda +250" },
  { "value": "RE_262", "label": "Réunion +262" },
  { "value": "BL_590", "label": "Saint Barthélemy +590" },
  { "value": "SH_290", "label": "Saint Helena +290" },
  { "value": "KN_1869", "label": "Saint Kitts and Nevis +1869" },
  { "value": "LC_1758", "label": "Saint Lucia +1758" },
  { "value": "MF_590", "label": "Saint Martin (French part) +590" },
  { "value": "PM_508", "label": "Saint Pierre and Miquelon +508" },
  { "value": "VC_1784", "label": "Saint Vincent and the Grenadines +1784" },
  { "value": "WS_685", "label": "Samoa +685" },
  { "value": "SM_378", "label": "San Marino +378" },
  { "value": "ST_239", "label": "Sao Tome and Principe +239" },
  { "value": "SA_966", "label": "Saudi Arabia +966" },
  { "value": "SN_221", "label": "Senegal +221" },
  { "value": "RS_381", "label": "Serbia +381" },
  { "value": "SC_248", "label": "Seychelles +248" },
  { "value": "SL_232", "label": "Sierra Leone +232" },
  { "value": "SG_65", "label": "Singapore +65" },
  { "value": "SX_1", "label": "Sint Maarten (Dutch part) +1" },
  { "value": "SK_421", "label": "Slovakia +421" },
  { "value": "SI_386", "label": "Slovenia +386" },
  { "value": "SB_677", "label": "Solomon Islands +677" },
  { "value": "SO_252", "label": "Somalia +252" },
  { "value": "ZA_27", "label": "South Africa +27" },
  { "value": "GS_500", "label": "South Georgia and the South Sandwich Islands +500" },
  { "value": "SS_211", "label": "South Sudan +211" },
  { "value": "ES_34", "label": "Spain +34" },
  { "value": "LK_94", "label": "Sri Lanka +94" },
  { "value": "SR_597", "label": "Suriname +597" },
  { "value": "SJ_47", "label": "Svalbard and Jan Mayen +47" },
  { "value": "SZ_268", "label": "Swaziland +268" },
  { "value": "SE_46", "label": "Sweden +46" },
  { "value": "CH_41", "label": "Switzerland +41" },
  { "value": "TW_886", "label": "Taiwan +886" },
  { "value": "TJ_992", "label": "Tajikistan +992" },
  { "value": "TZ_255", "label": "Tanzania, United Republic of +255" },
  { "value": "TH_66", "label": "Thailand +66" },
  { "value": "TL_670", "label": "Timor-Leste +670" },
  { "value": "TG_228", "label": "Togo +228" },
  { "value": "TK_690", "label": "Tokelau +690" },
  { "value": "TO_676", "label": "Tonga +676" },
  { "value": "TT_1868", "label": "Trinidad and Tobago +1868" },
  { "value": "TN_216", "label": "Tunisia +216" },
  { "value": "TR_90", "label": "Turkey +90" },
  { "value": "TM_993", "label": "Turkmenistan +993" },
  { "value": "TC_1649", "label": "Turks and Caicos Islands +1649" },
  { "value": "TV_688", "label": "Tuvalu +688" },
  { "value": "UG_256", "label": "Uganda +256" },
  { "value": "UA_380", "label": "Ukraine +380" },
  { "value": "AE_971", "label": "United Arab Emirates +971" },
  { "value": "GB_44", "label": "United Kingdom +44" },
  { "value": "US_1", "label": "United States +1" },
  { "value": "UM_1", "label": "United States Minor Outlying Islands +1" },
  { "value": "UY_598", "label": "Uruguay +598" },
  { "value": "UZ_998", "label": "Uzbekistan +998" },
  { "value": "VU_678", "label": "Vanuatu +678" },
  { "value": "VE_58", "label": "Venezuela +58" },
  { "value": "VN_84", "label": "Viet Nam +84" },
  { "value": "VG_1", "label": "Virgin Islands (British) +1" },
  { "value": "VI_1", "label": "Virgin Islands (U.S.) +1" },
  { "value": "WF_681", "label": "Wallis and Futuna +681" },
  { "value": "EH_21228", "label": "Western Sahara +212 28" },
  { "value": "YE_967", "label": "Yemen +967" },
  { "value": "ZM_260", "label": "Zambia +260" },
  { "value": "ZW_263", "label": "Zimbabwe +263" },
  { "value": "AX_358", "label": "Åland Islands +358" }
];

export {DEFAULT_COUNTRY_CODES};