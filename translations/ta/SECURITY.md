<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4ecc3bf2e27983d4c780be6f26ee6228",
  "translation_date": "2025-10-11T11:40:17+00:00",
  "source_file": "SECURITY.md",
  "language_code": "ta"
}
-->
<!-- BEGIN MICROSOFT SECURITY.MD V0.0.5 BLOCK -->

## பாதுகாப்பு

Microsoft எங்கள் மென்பொருள் தயாரிப்புகள் மற்றும் சேவைகளின் பாதுகாப்பை மிகுந்த கவனத்துடன் பார்க்கிறது, இதில் [Microsoft](https://github.com/Microsoft), [Azure](https://github.com/Azure), [DotNet](https://github.com/dotnet), [AspNet](https://github.com/aspnet), [Xamarin](https://github.com/xamarin) மற்றும் [எங்கள் GitHub அமைப்புகள்](https://opensource.microsoft.com/?WT.mc_id=academic-77807-sagibbon) ஆகியவற்றின் GitHub அமைப்புகள் மூலம் நிர்வகிக்கப்படும் அனைத்து மூலக் குறியீட்டு சேமிப்பகங்களும் அடங்கும்.

Microsoft-க்கு சொந்தமான எந்த சேமிப்பகத்திலும் [Microsoft-ன் பாதுகாப்பு பாதிப்பு வரையறை](https://docs.microsoft.com/previous-versions/tn-archive/cc751383(v=technet.10)/?WT.mc_id=academic-77807-sagibbon) உட்பட பாதுகாப்பு பாதிப்பை நீங்கள் கண்டுபிடித்ததாக நம்பினால், கீழே விவரிக்கப்பட்டுள்ளபடி எங்களுக்கு தகவல் அளிக்கவும்.

## பாதுகாப்பு பிரச்சினைகளை அறிவிக்க

**தயவுசெய்து பொதுவான GitHub பிரச்சினைகள் மூலம் பாதுகாப்பு பாதிப்புகளை அறிவிக்க வேண்டாம்.**

அதற்கு பதிலாக, Microsoft Security Response Center (MSRC) மூலம் [https://msrc.microsoft.com/create-report](https://msrc.microsoft.com/create-report/?WT.mc_id=academic-77807-sagibbon) இல் தகவல் அளிக்கவும்.

உள்நுழையாமல் சமர்ப்பிக்க விரும்பினால், [secure@microsoft.com](mailto:secure@microsoft.com) க்கு மின்னஞ்சல் அனுப்பவும். உங்கள் செய்தியை எங்கள் PGP விசையுடன் குறியாக்கம் செய்ய முடிந்தால், அதை [Microsoft Security Response Center PGP Key பக்கம்](https://www.microsoft.com/msrc/pgp-key-msrc/?WT.mc_id=academic-77807-sagibbon) இல் இருந்து பதிவிறக்கவும்.

24 மணி நேரத்திற்குள் பதில் பெற வேண்டும். ஏதேனும் காரணத்திற்காக பதில் கிடைக்கவில்லை என்றால், உங்கள் முதன்மை செய்தியை எங்கள் மின்னஞ்சல் மூலம் மீண்டும் உறுதிப்படுத்தவும். கூடுதல் தகவல்களை [microsoft.com/msrc](https://www.microsoft.com/msrc/?WT.mc_id=academic-77807-sagibbon) இல் காணலாம்.

கீழே பட்டியலிடப்பட்ட தகவல்களை (உங்களால் வழங்க முடிந்த அளவுக்கு) சேர்க்கவும், இது சாத்தியமான பிரச்சினையின் தன்மை மற்றும் அளவை நாங்கள் சிறப்பாக புரிந்துகொள்ள உதவும்:

  * பிரச்சினையின் வகை (எ.கா. பஃபர் ஓவர்ஃப்ளோ, SQL Injection, Cross-Site Scripting, போன்றவை)
  * பிரச்சினை வெளிப்படும் மூலக் கோப்பின் முழு பாதைகள்
  * பாதிக்கப்பட்ட மூலக் குறியீட்டின் இருப்பிடம் (tag/branch/commit அல்லது நேரடி URL)
  * பிரச்சினையை மீண்டும் உருவாக்க தேவையான சிறப்பு கட்டமைப்பு
  * பிரச்சினையை மீண்டும் உருவாக்க படிப்படியாக வழிமுறைகள்
  * Proof-of-concept அல்லது exploit code (சாத்தியமானால்)
  * பிரச்சினையின் தாக்கம், அதில் ஒரு தாக்குதலாளர் பிரச்சினையை எப்படி பயன்படுத்த முடியும்

இந்த தகவல்கள் உங்கள் அறிக்கையை விரைவாக மதிப்பீடு செய்ய உதவும்.

நீங்கள் bug bounty க்காக அறிக்கை அளிக்கிறீர்கள் என்றால், முழுமையான அறிக்கைகள் அதிகமான bounty பரிசுக்கு உதவக்கூடும். எங்கள் [Microsoft Bug Bounty Program](https://microsoft.com/msrc/bounty/?WT.mc_id=academic-77807-sagibbon) பக்கம் சென்று எங்கள் செயல்பாட்டில் உள்ள திட்டங்கள் பற்றிய கூடுதல் விவரங்களைப் பார்க்கவும்.

## விரும்பப்படும் மொழிகள்

எங்கள் அனைத்து தொடர்புகளும் ஆங்கிலத்தில் இருக்க விரும்புகிறோம்.

## கொள்கை

Microsoft [Coordinated Vulnerability Disclosure](https://www.microsoft.com/msrc/cvd/?WT.mc_id=academic-77807-sagibbon) கொள்கையை பின்பற்றுகிறது.

<!-- END MICROSOFT SECURITY.MD BLOCK -->

---

**குறிப்பு**:  
இந்த ஆவணம் [Co-op Translator](https://github.com/Azure/co-op-translator) என்ற AI மொழிபெயர்ப்பு சேவையைப் பயன்படுத்தி மொழிபெயர்க்கப்பட்டுள்ளது. நாங்கள் துல்லியத்திற்காக முயற்சிக்கிறோம், ஆனால் தானியங்கி மொழிபெயர்ப்புகளில் பிழைகள் அல்லது தவறான தகவல்கள் இருக்கக்கூடும் என்பதை கவனத்தில் கொள்ளவும். அதன் தாய்மொழியில் உள்ள மூல ஆவணம் அதிகாரப்பூர்வ ஆதாரமாகக் கருதப்பட வேண்டும். முக்கியமான தகவல்களுக்கு, தொழில்முறை மனித மொழிபெயர்ப்பு பரிந்துரைக்கப்படுகிறது. இந்த மொழிபெயர்ப்பைப் பயன்படுத்துவதால் ஏற்படும் எந்த தவறான புரிதல்கள் அல்லது தவறான விளக்கங்களுக்கு நாங்கள் பொறுப்பல்ல.