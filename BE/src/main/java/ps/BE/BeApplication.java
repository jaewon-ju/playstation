package ps.BE;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ps.BE.service.CrawlingService;

@SpringBootApplication
public class BeApplication {

	public static void main(String[] args) {
		CrawlingService crawlingService = new CrawlingService();
		crawlingService.fetchGameTitles();

	}

}
