package api.test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import api.mongobulk.MongoBulkService;
import api.word.WordRepository;
import api.word.Word;

@RestController
@CrossOrigin
@RequestMapping("test")

public class Tests {
	
	@Autowired
	private WordRepository wordRepository;
	@Autowired
	private MongoTemplate mongoTemplate;
	@Autowired
	private MongoBulkService mongoBulk;
	
	@RequestMapping(value = "word/modify/user", method = RequestMethod.PUT)
	public ResponseEntity<List<Word>> modifyUserWord(@RequestBody String user){
		Update update = new Update();
		update.set("user", user);
		
		try {
			mongoBulk.update(new Query(), update, "word");	
		} catch (RuntimeException e) {
			return new ResponseEntity<List<Word>>(HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<List<Word>>(HttpStatus.OK);
		
	}
	
	
}
