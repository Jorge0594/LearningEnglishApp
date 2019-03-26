package api.word;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/word")
public class WordController {
	
	@Autowired
	private WordRepository wordRepository;
	@Autowired
	private MongoTemplate mongoTemplate;
	
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ResponseEntity<Word> addWord(@RequestBody Word word){
		
		word.setId(null);
		word.setnCorrect(0);
		word.setnFail(0);
		word.setPercentCorrect(0);
		
		wordRepository.save(word);
		
		return new ResponseEntity<Word>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResponseEntity<List<Word>> getAllWords(){
		return new ResponseEntity<List<Word>>(wordRepository.findAll(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/subtype/{subtype}", method = RequestMethod.GET)
	public ResponseEntity<List<Word>> findBySubtype(@PathVariable String subtype){
		Query query = new Query();
		query.addCriteria(Criteria.where("subType").is(subtype));
		return new ResponseEntity<List<Word>>(mongoTemplate.find(query, Word.class), HttpStatus.OK);
	}

}
