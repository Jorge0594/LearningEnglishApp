package api.word;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface WordRepository extends MongoRepository<Word, String> {
	
	Word findWordByWordAndUserAllIgnoreCase(String word, String user);
}
