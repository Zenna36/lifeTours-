DROP DATABASE IF EXISTS `tours`;
CREATE DATABASE `tours`;
USE tours;
DROP table IF EXISTS `lostInTime`;
CREATE TABLE lostintime (
  id INT UNSIGNED AUTO_INCREMENT,
  author VARCHAR(255),
  tourName VARCHAR(255),
  years VARCHAR(255),
  country VARCHAR(255),
  famousWorks VARCHAR(255),
  picture VARCHAR(255),
  gender VARCHAR(255),
  timeframe VARCHAR(255),
  CONSTRAINT PRIMARY KEY (id)
);

INSERT INTO LostInTime
  (author,tourName,years,country,famousWorks,picture,gender,timeframe)
VALUES
  ('virginia woolf','Dancing with the Woolf','1800s','United Kingdom','The Years, A Room of One''s Own, To the Lighthouse, Mrs Dalloway, The Voyage Out','https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg/220px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg','Female','4 Days'),
  ('maya angelou','Change your attitude','1900s','United States','I Know Why The Caged Bird Sings, And Still I rise, The Heart of A Woman, On The Pulse of Morning, A Song Flung Up to Heaven','https://media.glamourmagazine.co.uk/photos/61dec00fec31c26165e7cb1c/master/w_1600%2Cc_limit/MAYAANGELOU_120122_GettyImages-74252590_P.jpg','Female','4 Days'),
  ('walt whitman','Not I can travel, the leaves of grass','1800s','United States','Song of Myself, I Sing the Body Electric, I Hear America Singing, O Captain, A Noiseless Patient Spider','https://upload.wikimedia.org/wikipedia/commons/1/1c/Walt_Whitman%2C_steel_engraving%2C_July_1854.jpg','male','3 Days'),
  ('sylvia plath','A Mirrored pool of thought','1900s','United States','Daddy, Lady Lazarus, Mirror, Ariel, The Bell Jar','https://www.nybooks.com/wp-content/uploads/2017/11/plath-brunette.jpg','Female','4 Days'),
  ('toni morrison','Thin love ain''t love at all','1900s','United States','The Bluest Eye, Sula, Song of Solomon, Beloved, Remember: The Journey to School Integration','https://static01.nyt.com/images/2019/08/06/books/06Books-Appraisal/06Books-Appraisal-articleLarge.jpg?quality=75&auto=webp&disable=upscale','Female','5 Days'),
  ('emily dickinson','Forever is composed of Nows','1800s','United States','I Heard a fly buzz - when I died, Success is counted sweetest, I felt a funderal, in my Brain, Because I could not stop for Death, My Life had stood - a loaded Gun','https://static.faber.co.uk/wp-content/uploads/2021/08/Black-white_photograph_of_Emily_Dickinson_Restored.jpg','Female','3 Days'),
  ('mary shelley','The Modern Day Prometheus','1800s','United Kingdom','Frankenstein, The Last Man, The Fortunes of Perkin Warbeck, Valperga, History of Six Weeks Tour','https://www2.clarku.edu/faculty/lkasmer/ENG263/Fall04/ghollands/images/Mary_Shelley.jpg','Female','3 Days'),
  ('jane austen','There is no enjoyment like reading','1700s','United States','Song of Myself, I Sing the Body Electric, I Hear America Singing, O Captain, A Noiseless Patient Spider','https://th-thumbnailer.cdn-si-edu.com/wC408fAbBm1zjzKZKqGYcYUQfeU=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/30/4a/304a1ef2-1c4a-429c-a612-2ec99d797737/jane_austen_1870_memoir_woodcut_-_jane_austens_house.jpg','Female','4 Days'),
  ('charles bukowski','Find what you love and let it kill you','1900s','Germany','Notes Of A Dirty Old Man, Post Office, Hot Water Music, Factotum, Ham On Rye','https://sobotkalitmag.files.wordpress.com/2015/09/bukowski.jpg','male','5 Days'),
  ('lord byron','Laughing is cheap medicine','1800s','United States','Don Juan, When We Two Parted, Darkness, Beppo, She Walks In Beauty','https://cdn.britannica.com/15/147615-050-9D75F95E/George-Gordon-Byron.jpg','male','5 Days');


INSERT INTO LostInTime
  (author,tourName,years,country,famousWorks,picture,gender,timeframe)
VALUES
  ('')