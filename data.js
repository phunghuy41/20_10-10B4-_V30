const girls = [
  {
    "id": "student-01",
    "name": "Lê Phạm Khánh An",
    "subject": "",
    "greeting": "Gửi Lê Phạm Khánh An,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Khánh An không chỉ hôm nay mà 365 ngày tới đều cười thật rực rỡ! Chúc cậu luôn gặp đúng những người thấu hiểu để sẻ chia, đạt được những mục tiêu mình ấp ủ, ăn món mình thèm, và nhận về những điều ngọt ngào xứng đáng với sự tử tế của cậu. Mong Khánh An luôn giữ được sự vô tư, kiên định và một năng lượng thật hạnh phúc từ sâu bên trong nhéee ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-02",
    "name": "Vũ Thùy An",
    "subject": "",
    "greeting": "Gửi Vũ Thùy An,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "Happy 20/10 Thùy An! Mong rằng ngày hôm nay vũ trụ sẽ gửi đến cậu toàn những điều may mắn và ngập tràn niềm vui. Chúc cậu luôn giữ được sự rạng rỡ, tự tin, đón nhận những món quà bất ngờ hợp gu nhất và thu hút về mình những trải nghiệm tuyệt vời trong chặng đường phía trước nha ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-03",
    "name": "Phạm Phương Anh",
    "subject": "",
    "greeting": "Gửi Phạm Phương Anh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "Chúc cậu có một ngày 20/10 ngập tràn những bất ngờ ngọt ngào. Mong rằng mỗi nơi cậu bước đến hôm nay đều có thời tiết chiều lòng người, mỗi người cậu gặp đều mang lại năng lượng tích cực, và mọi món quà nhận được đều trúng phóc sở thích. Hãy cứ tự do bộc lộ cá tính, tỏa sáng theo cách rực rỡ nhất và tận hưởng một ngày thuộc về riêng cậu nhé ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-04",
    "name": "Nguyễn Ngọc Anh",
    "subject": "",
    "greeting": "Gửi Nguyễn Ngọc Anh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Anh có một ngày mà tiếng cười xuất hiện còn nhiều hơn thông báo điện thoại nhaaa Chúc cậu nhận quà đúng gu, bắt được góc ảnh xịn, nghe một câu khen làm vui cả buổi và gặp thật nhiều khoảnh khắc đáng yêu làm cậu bật cười thích thú. Hôm nay cứ vô tư hết cỡ, cười thật tự nhiên và tận hưởng chiếc 20/10 tuyệt vời của mình nhé ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-05",
    "name": "Đinh Thùy Chi",
    "subject": "",
    "greeting": "Gửi Đinh Thùy Chi,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thùy Chi hôm nay “hên dữ vậy trời” từ đầu đến cuối nè .Chúc Chi đi đâu cũng gặp chuyện thuận lợi, chọn món nào trúng món ngon, bóc quà phát là trúng đúng thứ mình thích, chụp góc nào cũng rạng rỡ bắt cam và nếu có lỡ mệt một chút thì có chuyện vui kéo mood lên liền. Cứ để hôm nay chiều cậu một chút: thích gì vui nấy, cười thật to và tận hưởng ngày hôm nay thật trọn vẹn nha ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-06",
    "name": "Nguyễn Khánh Chi",
    "subject": "",
    "greeting": "Gửi Nguyễn Khánh Chi,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Khánh Chi có một ngày nhẹ tênh nhưng niềm vui thì luôn đầy pin. Chúc cậu vừa đặt điện thoại xuống là có người rủ buôn chuyện, vừa nghĩ tới đồ ăn là gặp món ngon hợp vị, và đứng vào góc nào lên ảnh cũng xinh lung linh. Hôm nay cứ chill theo đúng nghĩa: nghe nhạc mình thích, ăn món mình thèm, và cười tới mức quên xem giờ luôn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-07",
    "name": "Hoàng Lê Ngọc Diệp",
    "subject": "",
    "greeting": "Gửi Hoàng Lê Ngọc Diệp,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Diệp hôm nay gặp toàn những pha ''ủa vui vậy!'' nha. Chúc giờ ra chơi nào cũng ngập tiếng cười, đi đâu cũng có chuyện vui và mở quà nào cũng thấy ưng ý ♡. Cậu cứ giữ nguyên cái năng lượng tích cực khiến người khác cũng phải vui lây này nhé; hôm nay cứ cười thật thoải mái thôi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-08",
    "name": "Vũ Ngọc Diệp",
    "subject": "",
    "greeting": "Gửi Vũ Ngọc Diệp,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Diệp có một ngày đẹp từ mood tới ảnh nhaaaa. Chúc cậu mặc gì cũng thấy hợp, chụp góc nào cũng ưng, nói chuyện với ai cũng có chuyện vui để kể và nhận được một món quà khiến cậu thích mê. Hôm nay cứ để mình được nuông chiều bởi những điều nhỏ xíu: món ngon, lời chúc dễ thương, và một buổi tối thật trọn vẹn nhé ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-09",
    "name": "Lê Hạnh Dung",
    "subject": "",
    "greeting": "Gửi Lê Hạnh Dung,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 vui vẻ nha Hạnh Dung ơi! Chúc cậu hôm nay cười sập nguồn, đi ăn sập tiệm với hội bét-fờ-ren, nói câu nào là cười nội thương câu đó. Hôm nay không cần giữ hình tượng đâu, thích làm gì thì làm, ăn món mình thích và tận hưởng một ngày chill hết nấc nhé. Cả thế giới hôm nay phải chiều chuộng cậu!🥳 ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-10",
    "name": "Đỗ Nhật Hà",
    "subject": "",
    "greeting": "Gửi Đỗ Nhật Hà,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Nhật Hà hôm nay vừa xinh vừa vui theo kiểu nhìn là biết đang có chuyện hạnh phúc nhá Chúc outfit đúng ý, tóc vào nếp mượt mà, camera bắt trọn góc đẹp và những món quà mở ra đều khiến cậu phải thốt lên vì thích thú. Hôm nay cứ như có một ngày nghỉ mini: vui hết mức và cười thật đã nha ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-11",
    "name": "Lê Ngọc Hà",
    "subject": "",
    "greeting": "Gửi Lê Ngọc Hà,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Ngọc Hà có một ngày thật dịu, thật vui và gặp những điều khiến lòng mình dễ chịu nèe .Chúc cậu nghe được một lời khen chân thành, nhận một món quà vừa vặn với sở thích và có một cuộc trò chuyện ấm áp mà không cần lo nghĩ. Hôm nay cứ thong thả ăn món mình thích, ngồi cạnh người khiến mình vui và tận hưởng cảm giác được yêu thương ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-12",
    "name": "Nguyễn Thị Thanh Hải",
    "subject": "",
    "greeting": "Gửi Nguyễn Thị Thanh Hải,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thanh Hải có một ngày mềm mại như một buổi chiều thảnh thơi không chút vội vã nèee .Chúc cậu có thời gian cho một ly nước vị mình mê, một bài nhạc đúng gu, một cuộc trò chuyện thật dễ chịu và một món quà làm ấm lòng. Hôm nay hãy cứ nhận lấy những điều đáng yêu đến bên cậu một cách tự nhiên nhất nhé ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-13",
    "name": "Đặng Khánh Huyền",
    "subject": "",
    "greeting": "Gửi Đặng Khánh Huyền,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Táo cute hột me hôm nay được yêu chiều vừa đủ để thấy mình thật đặc biệt nha-))) Chúc cậu nhận được những lời nói làm mình vui thật lòng, gặp những người bạn tinh tế, ăn một bữa thật ngon và có một khoảng không gian yên bình đúng sở thích. Chỉ cần hôm nay có vài khoảnh khắc khiến cậu mỉm cười là ngày 20/10 này đã quá trọn vẹn rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-14",
    "name": "Nguyễn Diệp Khanh",
    "subject": "",
    "greeting": "Gửi Nguyễn Diệp Khanh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Diệp Khanh có một ngày đầy những niềm vui bé xíu nhưng cộng lại thành hạnh phúc to đùng nhaaa. Chúc một câu nói dễ thương làm cậu vui cả buổi, một món quà nhỏ làm cậu bất ngờ và một bữa ăn ngon đúng điệu. Hôm nay cứ nhẹ nhàng thôi, cười thật tươi khi vui và tận hưởng một ngày trọn vẹn của riêng mình ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
    {
    "id": "student-15",
    "name": "Đào Phương Linh",
    "subject": "",
    "greeting": "Gửi Đào Phương Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Phương Linh hôm nay nhận được đúng kiểu quan tâm ấm áp mà mình thích nèee. Chúc cậu luôn được bao quanh bởi những điều ngọt ngào, ăn món mình thèm, nhận được những món quà bất ngờ và có một ngày tràn đầy năng lượng rực rỡ nhéee ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
},
    
  {
    "id": "student-16",
    "name": "Lê Hà Linh",
    "subject": "",
    "greeting": "Gửi Lê Hà Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà Linh có một ngày thật trong veo nhaaaa. Chúc cậu được nghe những câu khiến lòng nhẹ đi, gặp một người nói chuyện rất hợp và có đủ thời gian để làm mấy điều mình thích. Một món ăn ngon, một bài hát đúng mood, một tấm ảnh nhìn lại thấy vui — vậy là đủ tạo thành một ngày đẹp rồi. Cứ cười thật tự nhiên và tận hưởng từng khoảnh khắc nhỏ nhé ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-17",
    "name": "Nguyễn Hà Linh",
    "subject": "",
    "greeting": "Gửi Nguyễn Hà Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà Linh hôm nay được nghỉ một chút khỏi những chuyện phải nghĩ nhiều nè Chúc cậu có một buổi chiều thật dễ chịu, một bữa ăn ngon, một cuộc trò chuyện không gượng gạo và một khoảng yên tĩnh đúng lúc. Hôm nay cứ chậm lại một nhịp thôi, không cần cố làm ngày này thật đặc biệt; chỉ cần cậu thấy vui, thấy thoải mái và thấy mình được thương là đủ rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-18",
    "name": "Nguyễn Thị Vân Linh",
    "subject": "",
    "greeting": "Gửi Nguyễn Thị Vân Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Vân Linh có một ngày ngọt vừa đủ, không sến mà vẫn thật vui nha. Chúc cậu nhận được một món quà xinh xắn, nghe một câu nói làm lòng vui lên và có ít nhất một lần cười vì một chuyện rất ngớ ngẩn. Hôm nay cứ tận hưởng cảm giác được mọi người nhớ tới mình, được ngồi cạnh người mình thích nói chuyện và được vui theo nhịp của riêng mình ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-19",
    "name": "Vũ Thái Linh",
    "subject": "",
    "greeting": "Gửi Vũ Thái Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thái Linh hôm nay có thật nhiều khoảng thời gian “được là mình” nha. Chúc cậu muốn nói thì cứ nói, muốn yên thì cứ yên, muốn ăn món gì thì chọn ngay món đó và gặp người nào nói chuyện khiến mình thấy nhẹ lòng. Một ngày đẹp không nhất thiết phải ồn ào; đúng người, đúng mood, đúng món ngon và một nụ cười tự nhiên là quá ổn rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-20",
    "name": "Đoàn Phương Linh",
    "subject": "",
    "greeting": "Gửi Đoàn Phương Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Phương Linh có một ngày thật xinh xắn theo cách rất riêng nha! Chúc cậu nhận được một lời chúc khiến mình thấy được trân trọng, bắt gặp một khoảnh khắc đáng yêu bất ngờ và có thời gian ngồi yên tận hưởng nó. Hôm nay cứ để mọi thứ chậm một chút: ăn ngon, nghe nhạc, nói chuyện với người mình quý và cười thật thoải mái, vì hôm nay là ngày để cậu vui ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-21",
    "name": "Nguyễn Hà Linh",
    "subject": "",
    "greeting": "Gửi Nguyễn Hà Linh,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà Linh hôm nay slay từ lúc bước ra khỏi nhà tới lúc về nha! Chúc outfit lên form, tóc vào nếp, camera mở phát có ảnh đẹp và câu nào đăng story cũng đúng vibe. Quà thì phải đúng gu, đồ ăn phải đúng miệng, mood phải cao. Hôm nay cứ tự tin mà vui, thích gì nhận nấy, chụp gì đăng nấy và tận hưởng cảm giác mình đang có một ngày rất “đỉnh” ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-22",
    "name": "Nguyễn Tú Mai",
    "subject": "",
    "greeting": "Gửi Nguyễn Tú Mai,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Tú Mai hôm nay có một chiếc mood ''very happy'' không gì phá nổi nha! Chúc đi chơi là gặp kèo vui, mở menu là chọn trúng món ngon, lên ảnh là có tấm muốn đăng ngay và lướt đâu cũng bắt gặp thứ làm mình bật cười. Hôm nay cậu cứ giữ đúng phong độ: vui thì cười lớn, thích thì chốt, không thích thì bỏ qua — 20/10 này phải thật đúng chất cậu ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-23",
    "name": "Nguyễn Tường Mai",
    "subject": "",
    "greeting": "Gửi Nguyễn Tường Mai,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "Happy 20/10 nha Tường Maii Chúc cho cái mood của cậu lúc nào cũng 'on top', Visual 10 điểm, xinh khỏi bàn luôn nha. Mong là ngày hôm nay cậu sẽ được flex ngập tràn quà cáp, cuộc sống tự động 'bật chế độ' yêu thương, không có drama nào dám làm phiền. Cứ tự tin và hạnh phúc tận hưởng một ngày lễ trọn vẹn này vì cậu xứng đáng được trúng 'vía' hạnh phúc cả ngày hôm nayy ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-24",
    "name": "Nguyễn Thanh Mai",
    "subject": "",
    "greeting": "Gửi Nguyễn Thanh Mai,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thanh Mai hôm nay làm gì cũng có cảm giác “ôk, quá ổn” nhaa Chúc mọi thứ từ đồ ăn, ảnh chụp, tin nhắn tới mấy cuộc hẹn đều đúng mood, đúng lúc, đúng người. Chúc cậu có một chiếc story thật xinh, một trận cười thật lớn và một món quà nhìn phát biết ngay người tặng đã hiểu gu. Hôm nay cứ chill nhưng vẫn slay, quá hợp luôn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-25",
    "name": "Đỗ Hà My",
    "subject": "",
    "greeting": "Gửi Đỗ Hà My,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hà My hôm nay tuyệt đối nói không với drama, chỉ nhận năng lượng vui thôi nha! Chúc timeline toàn ảnh đẹp, group chat toàn chuyện hài, đồ ăn toàn món ngon và quà toàn món khiến cậu thích ngay. Hôm nay cứ “main character” một chút cũng chẳng sao: bước đi thật tự tin, cười thật tươi, chụp vài tấm xịn và tận hưởng spotlight của riêng mình ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-26",
    "name": "Nguyễn Hồng Ngân",
    "subject": "",
    "greeting": "Gửi Nguyễn Hồng Ngân,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hồng Ngân hôm nay có một chiếc aura sáng hơn bình thường một chút nhaa Chúc mở quà là trúng gu, mở camera là có ảnh, mở tin nhắn là gặp lời chúc dễ thương. Đi đâu cũng cứ thoải mái, cười thật tươi và giữ nguyên cái thần thái khiến người khác nhìn một cái là nhận ra ngay. Hôm nay cứ vui theo kiểu rất riêng của cậu, không cần giống ai hết ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-27",
    "name": "Nguyễn Vũ Kim Ngân",
    "subject": "",
    "greeting": "Gửi Nguyễn Vũ Kim Ngân,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Kim Ngân hôm nay “10 điểm không có nhưng” nhée Chúc mood cao, outfit ổn, ảnh đẹp, món ngon và mọi cuộc hẹn đều đúng vibe. Một ngày thật hợp gu thì phải có chút bất ngờ, chút tiếng cười và một khoảnh khắc khiến cậu muốn chụp lại ngay. Cứ tự tin tận hưởng đi, hôm nay thích gì thì chọn nấy, vui kiểu nào thì chơi kiểu đó ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-28",
    "name": "Đỗ Thảo Phương",
    "subject": "",
    "greeting": "Gửi Đỗ Thảo Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thảo Phương hôm nay nhìn phát là biết đang slay nhâ, Chúc cậu gặp đúng hội vui, đúng bài nhạc, đúng quán ngon và đúng chiếc góc sống ảo đỉnh nhất. Quà thì phải thật “cậu”, còn lời chúc phải làm cậu đọc xong bật cười. Hôm nay cứ bung mood thoải mái, nói chuyện hết mình, chụp ảnh thật xịn và tận hưởng một ngày 20/10 thật có chất ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-29",
    "name": "Nguyễn Mai Phương",
    "subject": "",
    "greeting": "Gửi Nguyễn Mai Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Mai Phương hôm nay có một ngày vừa xinh vừa có chuyện để kể nhaa Chúc cậu nhận được món quà nhìn là thấy “đúng mình”, có một pha bất ngờ đủ vui, một trận cười đủ lâu và vài tấm ảnh đủ xịn để giữ lại. Hôm nay cứ vui theo cách của cậu thôi, chẳng cần mọi thứ phải hoàn hảo. Chỉ cần có vài khoảnh khắc thật vui để nhớ lại là đủ rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-30",
    "name": "Vũ Mai Phương",
    "subject": "",
    "greeting": "Gửi Vũ Mai Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Mai Phương hôm nay được quyền khó tính với niềm vui của mình nha: quà phải xịn, đồ ăn phải ngon, ảnh phải đẹp và người đi cùng phải vui tính! Chúc cậu có một ngày đúng gu tới từng chi tiết, gặp đúng tần số mình thích và cười nhiều tới mức quên mất đang định làm gì. Hôm nay cứ chốt mọi kèo đáng yêu, còn chuyện khác để tính sau ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-31",
    "name": "Vũ Uyên Phương",
    "subject": "",
    "greeting": "Gửi Vũ Uyên Phương,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Uyên Phương có một ngày thật yên mà vẫn thật vui nèe Chúc cậu có một góc ngồi mình thích, một bài nhạc nghe mãi không chán, một món ăn vừa miệng và một cuộc trò chuyện không cần nói quá nhiều vẫn thấy thoải mái. Hôm nay cứ tận hưởng sự bình yên theo cách riêng, vui vì những điều nhỏ xíu và mỉm cười khi bất chợt thấy một khoảnh khắc thật đẹp ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-32",
    "name": "Nguyễn Thị Khánh Tâm",
    "subject": "",
    "greeting": "Gửi Nguyễn Thị Khánh Tâm,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "Happy Women's Day Khánh Tâmmmm .Chúc cậu hôm nay có một ngày thật trọn vẹn và nhiều niềm vui. Nhớ tạm gác deadline sang một bên, nhớ bớt nghĩ ngợi linh tinh lại, và nhớ dành ra ít nhất một tiếng để nuông chiều bản thân bằng một ly trà sữa hoặc một bộ phim yêu thích nha"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-33",
    "name": "Đào Mai Phương Thảo",
    "subject": "",
    "greeting": "Gửi Đào Mai Phương Thảo,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Mai Phương Thảo có một ngày thật dễ chịu để đầu óc được nghỉ một chút nha! Chúc cậu đọc gì cũng vào, làm gì cũng gọn, gặp câu khó thì tự nhiên nghĩ ra cách giải và xong việc còn đủ thời gian ngồi chill. Một món quà nhỏ, một lời chúc thật lòng, một bữa ăn ngon — gom lại thành một ngày vừa đủ vui, chẳng cần ồn ào vẫn đáng nhớ ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-34",
    "name": "Vũ Ngọc Cẩm Thư",
    "subject": "",
    "greeting": "Gửi Vũ Ngọc Cẩm Thư,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Cẩm Thư hôm nay có thật nhiều khoảnh khắc khiến cậu mỉm cười mà chẳng cần ai nhắc nha! Chúc việc cần làm được xử lý gọn, lúc cần tập trung thì đầu óc sáng, lúc nghỉ thì nghỉ thật thoải mái. Rồi nhớ dành chỗ cho mấy điều rất nhỏ nữa: một món ăn ngon, một bài hát hợp tai, một câu chuyện buồn cười và một buổi tối thật bình yên ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-35",
    "name": "Bùi Bảo Trâm",
    "subject": "",
    "greeting": "Gửi Bùi Bảo Trâm,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "Happy Women's Day Bảo Trâmm .Chúc cho ngày 20/10 thật nhiều niềm vui, luôn xinh đẹp, tự tin và tràn đầy năng lượng tích cực. Mong rằng công việc của bạn luôn suôn sẻ, cuộc sống ngập tràn tiếng cười, gặp nhiều may mắn và luôn hạnh phúc theo cách của riêng mình nhé ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-36",
    "name": "Hoàng Quỳnh Trang",
    "subject": "",
    "greeting": "Gửi Hoàng Quỳnh Trang,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "Happy Women's Day Quỳnh Trang✨.Chúc cậu 20/10 xinh đẹp nhân đôi, hạnh phúc nhân ba và may mắn nhân mười, mọi công việc đều thuận lợi, dealine bủa vây được tránh xaa. Mong cậu luôn có đủ năng lượng để làm những điều mình thích và tận hưởng một ngày thật trọn vẹn bên những người yêu thươnggg♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-37",
    "name": "An Thanh Tú",
    "subject": "",
    "greeting": "Gửi An Thanh Tú,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Thanh Tú hôm nay mọi thứ bỗng nhiên “dễ” hơn một chút nha! Chúc câu hỏi gặp được phần mình nhớ, việc cần làm xử lý đâu ra đó, điện thoại mở lên có một tin nhắn dễ thương và bữa ăn cuối ngày ngon thật ngon. Hôm nay cứ giữ cho mình một khoảng nghỉ, ngồi yên cũng được, cười cũng được, chẳng cần phải lúc nào cũng bận rộn ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-38",
    "name": "Nguyễn Bảo Vy",
    "subject": "",
    "greeting": "Gửi Nguyễn Bảo Vy,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Bảo Vy có một ngày thật vui nhưng vẫn giữ được chiếc nhịp riêng của mình nha! Chúc cậu làm việc gì cũng tập trung vừa đủ, nghỉ đúng lúc, gặp đúng người và có vài chuyện đáng yêu chen vào giữa những việc thường ngày. Một món quà nhỏ mở ra, một câu chuyện bất ngờ, một trận cười ngắn — gom lại thôi cũng đủ làm hôm nay khác đi rất nhiều rồi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-39",
    "name": "Trần Thị Hải Yến",
    "subject": "",
    "greeting": "Gửi Trần Thị Hải Yến,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡", "20/10 chúc Hải Yến có một ngày thật nhẹ lòng nhaaa Chúc cậu được ngồi ở nơi mình thích, nghe đúng bài nhạc mình muốn nghe, ăn đúng món mình thèm và nói chuyện với người khiến mình thấy thoải mái. Chúc cả ngày có những khoảng rất yên nhưng không hề buồn, chỉ là bình thường thôi mà dễ chịu, rồi bất chợt có một chuyện nhỏ làm cậu cười thật tươi ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  },
  {
    "id": "student-40",
    "name": "Nguyễn Trần Bảo Trân",
    "subject": "",
    "greeting": "Gửi Nguyễn Trần Bảo Trân,",
    "paragraphs": ["Cảm ơn bạn đã đọc thư nhaaa ♡","Nhân ngày 20/10, tớ muốn gửi đến Bảo Trân lời chúc chân thành nhất: chúc cậu hôm nay có thật nhiều niềm vui rực rỡ, cười thật đã và đón nhận thật nhiều điều dễ thương. Chúc cậu nhận được một món quà thật xinh xắn đúng ý, có một bữa ăn thật ngon miệng, và khi màn đêm buông xuống, một buổi tối thật yên bình sẽ ôm lấy cậu để khép lại một ngày đặc biệt bằng một nụ cười thật nhẹ nhàng, hạnh phúc ♡"],
    "sign": "Chúng tớ, với một lời chúc nhỏ ♡"
  }
];
const teacher = {
  "id": "teacher",
  "name": "Cô Hằng",
  "subject": "Một lời chúc gửi cô",
  "greeting": "Thưa cô Hằng kính mến,",
  "paragraphs": [
    "Nhân ngày 20/10, chúng em cảm ơn cô vì đã luôn quan tâm và đồng hành cùng 10B4. ♡",
    "Những lời nhắc, những câu chuyện và cả những lúc cô cùng lớp trao đổi khiến những ngày ở lớp trở nên gần gũi hơn. Chúng em rất trân trọng những điều bình thường như thế .",
    "Chúc cô luôn có nhiều niềm vui cho mình, cho mọi người, thật nhiều sức khỏe và có thật nhiều ngày đến lớp nhẹ nhàng, nhiều tiếng cười. Mong cô lúc nào cũng giữ được sự nhiệt tình và những niềm vui rất riêng của mình. Chúc cô có một 20/10 thật nhiều điều dễ thương ạ ♡"
  ],
  "sign": "Chúng em, 10B4 ♡",
  "teacher": true
};
