package ps.BE;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import ps.BE.util.InitGameDataLoader;

@SpringBootApplication
public class BeApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(BeApplication.class, args);
		InitGameDataLoader initGameDataLoader = context.getBean(InitGameDataLoader.class);
		initGameDataLoader.init();
	}
}
