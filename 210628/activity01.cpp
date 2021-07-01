
/**
 * 요구 정의 
 * 원형 데이터 표현을 지원하는 기본 구조를 설계한다.
 * 데이터 삽입 및 삭제 기능을 구현한다.
 * 자료구조는 원형이지만 begin(), end() 함수는 각각 다른 주소를 반환해야함
 * footer() headerious() insert() remove()
 * 
 *
 * 원형 데이터 표현을 지원하는 기본 구조 설계 
 *    struct element 만들기 <인덱스, 노래제목, 헤더, 푸터 >
 *    push_back 정의
 *      최초 시점 : before_track, after_track 둘다 없다
 *      최초 아닌 시점 : before_track은 그 이전 포인터 가리켜야하고,
 *                   그 이전포인터는 after_track에 현재의 포인터를 가리킨다.
 *      
 * 
 * 
 *
*/
#include <string>
#include <algorithm>
#include <iostream>

struct soundTrack
{
  std::string name;
  soundTrack* before_track;
  soundTrack* after_track;
};

class mp3Player
{
  public:
    using node = soundTrack;
    using node_pointer = node*;
  private:
    node_pointer header;
    node_pointer footer;
  public:
    void push_back (std::string name) {
      auto new_track = new soundTrack { name, NULL, NULL };
      //최초 시점인 경우 
      if (header == NULL) {
        header = new_track;
        footer = new_track;
      } else {
        footer->after_track = new_track;
        new_track->before_track = footer;
        footer = new_track;
      }
    };
    struct mp3Iterator
    {
      private:
        node_pointer pointer;
      public:
        mp3Iterator(node_pointer p) : pointer(p) {}
        std::string& operator*() { return pointer-> name; }
        node_pointer get() { return pointer; }
        mp3Iterator& operator++()
        {
          pointer = pointer -> after_track;
          std::cout << pointer->before_track << std::endl;
          if(!pointer) {
           
          }
          return *this;
        }
        
        mp3Iterator operator++(int)
        {
          mp3Iterator result = *this;
          ++(*this);
          return result;
        }
        friend bool operator==(const mp3Iterator& left, const mp3Iterator& right)
        {
          return left.pointer == right.pointer;
        }
        friend bool operator!=(const mp3Iterator& left, const mp3Iterator& right)
        {
          return left.pointer != right.pointer;
        }
    };
    mp3Iterator begin() { return mp3Iterator(header); }
    mp3Iterator end() { return mp3Iterator(footer); }
    mp3Iterator begin() const { return mp3Iterator(header); }
    mp3Iterator end() const { return mp3Iterator(footer); }
    
    mp3Player() = default;
    
    mp3Player(const std::initializer_list<std::string>& list) : header(NULL), footer(NULL)
    {
      for (auto it = std::rbegin(list); it != std::rend(list); it++)
        push_back(*it);
    }
};

int main() {
  mp3Player mp3 = { "10K Hours", "B.S.(Feat H.E.R)", "P*$$Y Fairy(OTW)" };
  
  mp3.push_back("ENDXIETY(Feat. Ann One)");
  mp3.push_back("ENDXIETY(Feat. Ann One)");
  mp3.push_back("ENDXIETY(Feat. Ann One)");
  std::cout << "첫 번째 리스트: ";
  for (auto i : mp3)
    std::cout << i << ' ';
  std::cout << std::endl;
}
// soundTrackIterator begin() { return soundTrackIterator(NULL, pointer); }
//     void pull_front() {}