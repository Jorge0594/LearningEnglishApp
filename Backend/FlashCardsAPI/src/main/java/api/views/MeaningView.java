package api.views;

import org.springframework.stereotype.Component;

@Component
public class MeaningView {
	
	private String language;
	private String form;
	private String meaning;
	private String examples;
	
	public MeaningView(){}

	public MeaningView(String language, String form, String meaning, String examples) {
		super();
		this.language = language;
		this.form = form;
		this.meaning = meaning;
		this.examples = examples;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getMeaning() {
		return meaning;
	}

	public void setMeaning(String meaning) {
		this.meaning = meaning;
	}

	public String getForm() {
		return form;
	}

	public void setForm(String form) {
		this.form = form;
	}

	public String getExamples() {
		return examples;
	}

	public void setExamples(String examples) {
		this.examples = examples;
	}

	@Override
	public String toString() {
		return "MeaningView [language=" + language + ", form=" + form + ", meaning=" + meaning + ", examples=" + examples + "]";
	}


}
