## ความปลอดภัย

Microsoft ให้ความสำคัญกับความปลอดภัยของผลิตภัณฑ์และบริการซอฟต์แวร์ของเราอย่างจริงจัง ซึ่งรวมถึงคลังซอร์สโค้ดทั้งหมดที่จัดการผ่านองค์กร GitHub ของเรา เช่น [Microsoft](https://github.com/Microsoft), [Azure](https://github.com/Azure), [DotNet](https://github.com/dotnet), [AspNet](https://github.com/aspnet), [Xamarin](https://github.com/xamarin) และ [องค์กร GitHub ของเรา](https://opensource.microsoft.com/?WT.mc_id=academic-77807-sagibbon)

หากคุณเชื่อว่าคุณพบช่องโหว่ด้านความปลอดภัยในคลังที่ Microsoft เป็นเจ้าของ ซึ่งตรงกับ [คำจำกัดความของช่องโหว่ด้านความปลอดภัยของ Microsoft](https://docs.microsoft.com/previous-versions/tn-archive/cc751383(v=technet.10)/?WT.mc_id=academic-77807-sagibbon) กรุณารายงานให้เราทราบตามคำแนะนำด้านล่าง

## การรายงานปัญหาด้านความปลอดภัย

**กรุณาอย่ารายงานช่องโหว่ด้านความปลอดภัยผ่านปัญหาสาธารณะใน GitHub**

กรุณารายงานผ่าน Microsoft Security Response Center (MSRC) ที่ [https://msrc.microsoft.com/create-report](https://msrc.microsoft.com/create-report/?WT.mc_id=academic-77807-sagibbon)

หากคุณต้องการส่งรายงานโดยไม่ต้องเข้าสู่ระบบ สามารถส่งอีเมลไปที่ [secure@microsoft.com](mailto:secure@microsoft.com) หากเป็นไปได้ กรุณาเข้ารหัสข้อความของคุณด้วย PGP key ของเรา โดยสามารถดาวน์โหลดได้จาก [Microsoft Security Response Center PGP Key page](https://www.microsoft.com/msrc/pgp-key-msrc/?WT.mc_id=academic-77807-sagibbon)

คุณควรได้รับการตอบกลับภายใน 24 ชั่วโมง หากไม่ได้รับการตอบกลับ กรุณาติดตามผลผ่านอีเมลเพื่อยืนยันว่าเราได้รับข้อความของคุณแล้ว ข้อมูลเพิ่มเติมสามารถดูได้ที่ [microsoft.com/msrc](https://www.microsoft.com/msrc/?WT.mc_id=academic-77807-sagibbon)

กรุณาระบุข้อมูลที่ร้องขอด้านล่าง (เท่าที่คุณสามารถให้ได้) เพื่อช่วยให้เราเข้าใจลักษณะและขอบเขตของปัญหาได้ดียิ่งขึ้น:

  * ประเภทของปัญหา (เช่น buffer overflow, SQL injection, cross-site scripting เป็นต้น)
  * เส้นทางเต็มของไฟล์ซอร์สที่เกี่ยวข้องกับการเกิดปัญหา
  * ตำแหน่งของซอร์สโค้ดที่ได้รับผลกระทบ (tag/branch/commit หรือ URL โดยตรง)
  * การตั้งค่าพิเศษที่จำเป็นในการทำให้เกิดปัญหา
  * คำแนะนำทีละขั้นตอนในการทำให้เกิดปัญหา
  * โค้ดตัวอย่างหรือโค้ดโจมตี (ถ้าเป็นไปได้)
  * ผลกระทบของปัญหา รวมถึงวิธีที่ผู้โจมตีอาจใช้ประโยชน์จากปัญหา

ข้อมูลเหล่านี้จะช่วยให้เราประเมินรายงานของคุณได้รวดเร็วขึ้น

หากคุณรายงานเพื่อรับรางวัล bug bounty รายงานที่สมบูรณ์มากขึ้นอาจช่วยให้คุณได้รับรางวัลที่สูงขึ้น กรุณาเยี่ยมชมหน้า [Microsoft Bug Bounty Program](https://microsoft.com/msrc/bounty/?WT.mc_id=academic-77807-sagibbon) เพื่อดูรายละเอียดเพิ่มเติมเกี่ยวกับโปรแกรมที่กำลังดำเนินการอยู่

## ภาษาที่แนะนำ

เราขอแนะนำให้การสื่อสารทั้งหมดเป็นภาษาอังกฤษ

## นโยบาย

Microsoft ปฏิบัติตามหลักการของ [Coordinated Vulnerability Disclosure](https://www.microsoft.com/msrc/cvd/?WT.mc_id=academic-77807-sagibbon)

---

**ข้อจำกัดความรับผิดชอบ**:  
เอกสารนี้ได้รับการแปลโดยใช้บริการแปลภาษา AI [Co-op Translator](https://github.com/Azure/co-op-translator) แม้ว่าเราจะพยายามให้การแปลมีความถูกต้องมากที่สุด แต่โปรดทราบว่าการแปลอัตโนมัติอาจมีข้อผิดพลาดหรือความไม่ถูกต้อง เอกสารต้นฉบับในภาษาดั้งเดิมควรถือเป็นแหล่งข้อมูลที่เชื่อถือได้ สำหรับข้อมูลที่สำคัญ ขอแนะนำให้ใช้บริการแปลภาษามืออาชีพ เราไม่รับผิดชอบต่อความเข้าใจผิดหรือการตีความผิดที่เกิดจากการใช้การแปลนี้