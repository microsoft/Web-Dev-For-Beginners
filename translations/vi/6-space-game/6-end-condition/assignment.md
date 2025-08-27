<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "24201cf428c7edba1ccec2a78a0dd8f8",
  "translation_date": "2025-08-27T22:42:16+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "vi"
}
-->
# Xây dựng một trò chơi mẫu

## Hướng dẫn

Hãy thử xây dựng một trò chơi nhỏ để thực hành các điều kiện kết thúc khác nhau. Thay đổi giữa việc đạt được một số điểm nhất định, nhân vật chính mất hết mạng sống hoặc tất cả quái vật bị tiêu diệt. Hãy tạo ra một trò chơi đơn giản như một trò chơi phiêu lưu dựa trên giao diện dòng lệnh. Sử dụng luồng trò chơi dưới đây làm nguồn cảm hứng:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

## Tiêu chí đánh giá

| Tiêu chí  | Xuất sắc                | Đạt yêu cầu                 | Cần cải thiện              |
| --------- | ----------------------- | --------------------------- | -------------------------- |
|           | trò chơi hoàn chỉnh     | trò chơi được trình bày một phần | trò chơi một phần có lỗi   |

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với các thông tin quan trọng, khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.