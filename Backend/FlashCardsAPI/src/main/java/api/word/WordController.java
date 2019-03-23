package api.word;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/word")
public class WordController {
	
	@Autowired
	private WordRepository wordRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ResponseEntity<List<Word>> getAllWords(){
		return new ResponseEntity<List<Word>>(wordRepository.findAll(), HttpStatus.OK);
	}

}
