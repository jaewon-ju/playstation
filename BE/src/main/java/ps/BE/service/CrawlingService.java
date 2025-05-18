package ps.BE.service;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CrawlingService {

    public List<String> fetchGameTitles() {
        WebDriverManager.chromedriver().setup(); // 드라이버 자동 설치
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless"); // 창을 띄우지 않음 (백그라운드 실행)
        options.addArguments("--disable-gpu");
        options.addArguments("--no-sandbox");

        WebDriver driver = new ChromeDriver(options);

        List<String> titles = new ArrayList<>();
        try {
            driver.get("https://www.playstation.com/ko-kr/ps-plus/games/?category=GAME_CATALOG");

            Thread.sleep(5000); // JS 로딩 대기 (적절히 조절 필요)

            while(true){
                // 게임 카드들이 있는 요소 탐색
                List<WebElement> gameCards = driver.findElements(By.cssSelector(".card_name__mLuPs p"));

                for (WebElement gameCard : gameCards) {
                    String title = gameCard.getText().split("\n")[0]; // 첫 줄만 게임 타이틀
                    titles.add(title);
                }

                // 다음 페이지 버튼 탐색
                List<WebElement> nextButtons = driver.findElements(By.cssSelector("a.pagination_page-link__bD3tY[aria-label='Next page']"));

                // 3) Next 버튼이 없거나 비활성화 되어있으면 종료
                if (nextButtons.isEmpty()) {
                    break;
                }

                WebElement nextButton = nextButtons.get(0);
                String ariaDisabled = nextButton.getAttribute("aria-disabled");
                if ("true".equals(ariaDisabled)) {
                    break; // 더 이상 다음 페이지 없음
                }

                // 다음 페이지 클릭
                nextButtons.get(0).click();

                // 페이지 전환 대기 (동적으로 컨텐츠가 로드되는 경우 필요)
                Thread.sleep(2000); // 또는 WebDriverWait 사용
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit(); // 드라이버 종료
        }

        System.out.println(titles);

        return titles;
    }
}
